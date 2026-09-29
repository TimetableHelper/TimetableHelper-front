import { courses } from '../data/courses';

export const WEEKDAYS = ['월', '화', '수', '목', '금'];
export const PERIOD_COUNT = 9; // ClassTime uses consecutive period numbers, e.g. 월12,목1.

export function getCourseMeetings(course) {
  if (!course || typeof course.ClassTime !== 'string') return [];
  return course.ClassTime.split(',').flatMap((time, index) => {
    const match = time.trim().match(/^([월화수목금])(\d+)$/);
    const length = Number(course.continuity?.[index]);
    if (!match || !Number.isInteger(length) || length < 1 || length > PERIOD_COUNT) return [];
    const start = Array.from({
      length: PERIOD_COUNT
    }, (_, i) => i + 1).find(first => Array.from({
      length
    }, (_, i) => first + i).join('') === match[2]);
    if (!start || start + length - 1 > PERIOD_COUNT) return [];
    return [{
      day: match[1],
      start,
      length,
      course
    }];
  });
}
export function getConflictingCourses(selected, candidate) {
  const meetings = getCourseMeetings(candidate);
  return selected.filter(course => course.classId !== candidate.classId && getCourseMeetings(course).some(existing => meetings.some(next => existing.day === next.day && existing.start < next.start + next.length && next.start < existing.start + existing.length)));
} // Older versions persisted separate weekday lists. Restore a single complete
// selection from known courses and derive every weekday from it instead.

export function normalizeSchedule(value) {
  if (!Array.isArray(value)) return [];
  return value.reduce((selected, saved) => {
    const course = courses.find(item => item.classId === Number(saved?.classId));
    if (!course || selected.some(item => item.classId === course.classId) || getConflictingCourses(selected, course).length) return selected;
    return [...selected, course];
  }, []);
}
export function replaceConflictingCourses(selected, candidate) {
  const current = normalizeSchedule(selected);
  const conflicts = new Set(getConflictingCourses(current, candidate).map(course => course.classId));
  return [...current.filter(course => !conflicts.has(course.classId) && course.classId !== candidate.classId), candidate];
}
export function removeCourse(selected, classId) {
  return normalizeSchedule(selected).filter(course => course.classId !== Number(classId));
}
const COLORS = ['#dce4ff', '#e8dcff', '#d9eeff', '#d3f0e8', '#ffead4', '#ffe1ed'];
export function getCourseColor(classId) {
  return COLORS[(Number(classId) - 1) % COLORS.length] || COLORS[0];
}
