import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../component/Header';
import Timetable from '../component/container/mon-to-sun';
import ClassList from '../component/select-class-schedule';
import SearchClassList from '../component/container/search-class-list';
import ScheduleConflictDialog from '../component/ScheduleConflictDialog';
import useTimetable from '../utils/useTimetable';
import '../styles/container/select-in-classlist.scss';

export default function MyTimetable() {
  const timetable = useTimetable();
  const totalCredits = timetable.selected.reduce((total, course) => total + course.Grades, 0);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>나의 시간표 · 시간표 도우미</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <main className="schedule-page">
        <div className="schedule-page__heading">
          <div>
            <p className="schedule-page__eyebrow">MY TIMETABLE</p>
            <h1>나의 시간표</h1>
            <p>듣고 싶은 강의를 골라 나만의 한 주를 만들어보세요.</p>
          </div>
          <span className="schedule-save-note">이 브라우저에 자동으로 저장돼요</span>
        </div>
        <div className="MyTimetable__column">
          <section
            className="MyTimetable__left"
            aria-labelledby="my-schedule-title"
          >
            <div className="schedule-summary">
              <h2 id="my-schedule-title">이번 학기 시간표</h2>
              <span aria-live="polite">{timetable.selected.length}개 강의 · {totalCredits}학점</span>
            </div>
            {timetable.selected.length === 0 && <p className="schedule-empty">아직 선택한 강의가 없어요. 강의 목록에서 + 버튼을 눌러 시작해보세요.</p>}
            <Timetable
              courses={timetable.selected}
              onDelete={timetable.deleteCourse}
            />
            <p className="schedule-footnote">예시 강의로 구성된 시간표입니다. 작은 화면에서는 시간표를 좌우로 움직여 볼 수 있어요.</p>
          </section>
          <div className="MyTimetable__right">
            <ClassList
              selected={timetable.selected}
              onSelect={timetable.selectCourse}
            />
            <SearchClassList
              selected={timetable.selected}
              onSelect={timetable.selectCourse}
            />
          </div>
        </div>
      </main>
      <ScheduleConflictDialog
        course={timetable.pendingCourse}
        conflicts={timetable.conflicts}
        onCancel={timetable.cancelReplacement}
        onConfirm={timetable.confirmReplacement}
      />
    </>
  );
}
