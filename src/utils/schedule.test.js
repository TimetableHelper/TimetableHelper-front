import { courses } from '../data/courses';
import { getConflictingCourses, getCourseMeetings, normalizeSchedule, removeCourse, replaceConflictingCourses } from './schedule';

const course = id => courses.find(item => item.classId === id);

const ids = selected => selected.map(item => item.classId);

test('parses every supplied course meeting without dropping a weekday', () => {
  courses.forEach(item => {
    const meetings = getCourseMeetings(item);
    expect(meetings).toHaveLength(item.ClassTime.split(',').length);
    expect(meetings.map(meeting => meeting.length)).toEqual(item.continuity);
  });
  expect(getCourseMeetings(course(1)).map(({
    day,
    start,
    length
  }) => ({
    day,
    start,
    length
  }))).toEqual([{
    day: '월',
    start: 1,
    length: 2
  }, {
    day: '목',
    start: 1,
    length: 1
  }]);
});
test('finds every conflicting course across weekdays and preserves adjacent periods', () => {
  const selected = [course(1), course(3), course(4)];
  expect(ids(getConflictingCourses(selected, course(8)))).toEqual([3, 4]);
  expect(ids(replaceConflictingCourses(selected, course(8)))).toEqual([1, 8]);
  expect(ids(selected)).toEqual([1, 3, 4]);
});
test('restores legacy course ids once and rejects invalid or overlapping saved entries', () => {
  expect(normalizeSchedule(null)).toEqual([]);
  expect(normalizeSchedule({
    finalClassArr: []
  })).toEqual([]);
  const restored = normalizeSchedule([null, {
    classId: '3'
  }, course(3), {
    classId: 999
  }, course(4), course(8)]);
  expect(ids(restored)).toEqual([3, 4]);
  expect(restored[0]).toEqual(course(3));
  expect(restored.flatMap(getCourseMeetings)).toHaveLength(4);
});
test('deleting a course removes all of its weekday meetings and survives JSON restoration', () => {
  const restored = JSON.parse(JSON.stringify([course(1), course(8)]));
  const next = removeCourse(restored, '8');
  expect(ids(normalizeSchedule(JSON.parse(JSON.stringify(next))))).toEqual([1]);
  expect(next.flatMap(getCourseMeetings).map(meeting => meeting.course.classId)).toEqual([1, 1]);
});
