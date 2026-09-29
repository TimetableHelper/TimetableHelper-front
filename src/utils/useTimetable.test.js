import React from 'react';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { courses } from '../data/courses';
import useTimetable from './useTimetable';
import ScheduleConflictDialog from '../component/ScheduleConflictDialog';
import Timetable from '../component/container/mon-to-sun';

function Harness() {
  const timetable = useTimetable();
  return (
    <>
      <output data-testid="selected">
        {timetable.selected.map(course => course.classId).join(',')}
      </output>
      {[1, 3, 4, 8].map(id => (
        <button
          type="button"
          key={id}
          onClick={() => timetable.selectCourse(courses.find(course => course.classId === id))}
        >강의 {id}</button>
      ))}
      <Timetable
        courses={timetable.selected}
        onDelete={timetable.deleteCourse}
      />
      <ScheduleConflictDialog
        course={timetable.pendingCourse}
        conflicts={timetable.conflicts}
        onCancel={timetable.cancelReplacement}
        onConfirm={timetable.confirmReplacement}
      />
    </>
  );
}

const open = () => render(<RecoilRoot>
  <Harness />
</RecoilRoot>);

const select = id => fireEvent.click(screen.getByRole('button', {
  name: `강의 ${id}`
}));

const savedIds = () => JSON.parse(localStorage.getItem('tableInfo')).finalClassArr.map(course => course.classId);

beforeEach(() => localStorage.clear());
test('canceling a multi-course conflict never changes the stored timetable and returns focus', async () => {
  open();
  [1, 3, 4].forEach(select);
  await waitFor(() => expect(savedIds()).toEqual([1, 3, 4]));
  const before = localStorage.getItem('tableInfo');
  const trigger = screen.getByRole('button', {
    name: '강의 8'
  });
  trigger.focus();
  fireEvent.click(trigger);
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getAllByRole('listitem')).toHaveLength(2);
  expect(screen.getByTestId('selected')).toHaveTextContent('1,3,4');
  expect(localStorage.getItem('tableInfo')).toBe(before);
  fireEvent.click(within(dialog).getByRole('button', {
    name: '기존 강의 유지'
  }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(localStorage.getItem('tableInfo')).toBe(before);
  expect(trigger).toHaveFocus();
  select(8);
  fireEvent.keyDown(document, {
    key: 'Escape'
  });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(localStorage.getItem('tableInfo')).toBe(before);
});
test('confirm replaces all conflicts; deletion removes every meeting and persists across remounts', async () => {
  const first = open();
  [1, 3, 4, 8].forEach(select);
  fireEvent.click(screen.getByRole('button', {
    name: '겹치는 강의 교체'
  }));
  await waitFor(() => expect(savedIds()).toEqual([1, 8]));
  expect(screen.getAllByRole('button', {
    name: '소프트웨어공학, 김한규 시간표에서 삭제'
  })).toHaveLength(3);
  first.unmount();
  const second = open();
  expect(screen.getByTestId('selected')).toHaveTextContent('1,8');
  fireEvent.click(screen.getAllByRole('button', {
    name: '소프트웨어공학, 김한규 시간표에서 삭제'
  })[0]);
  await waitFor(() => expect(savedIds()).toEqual([1]));
  expect(screen.queryByRole('button', {
    name: '소프트웨어공학, 김한규 시간표에서 삭제'
  })).not.toBeInTheDocument();
  second.unmount();
  open();
  expect(screen.getByTestId('selected')).toHaveTextContent(/^1$/);
});
test('legacy finalClassArr restores safely without resurrecting stale weekday data', async () => {
  localStorage.setItem('tableInfo', JSON.stringify({
    finalClassArr: [{
      classId: '8'
    }, {
      classId: 8
    }, null, {
      classId: 999
    }],
    MonClassArray: [courses[0]],
    MonClassIds: [1]
  }));
  open();
  await waitFor(() => expect(savedIds()).toEqual([8]));
  expect(screen.getAllByRole('button', {
    name: '소프트웨어공학, 김한규 시간표에서 삭제'
  })).toHaveLength(3);
  expect(screen.queryByRole('button', {
    name: '영어, Bora Kim 시간표에서 삭제'
  })).not.toBeInTheDocument();
});
