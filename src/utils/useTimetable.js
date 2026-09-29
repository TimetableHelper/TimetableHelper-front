import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { finalClassArray } from '../atoms';
import { getConflictingCourses, normalizeSchedule, removeCourse, replaceConflictingCourses } from './schedule';

export default function useTimetable() {
  const [storedCourses, setStoredCourses] = useRecoilState(finalClassArray);
  const selected = useMemo(() => normalizeSchedule(storedCourses), [storedCourses]);
  const [pendingCourse, setPendingCourse] = useState(null);
  useEffect(() => {
    if (JSON.stringify(storedCourses) !== JSON.stringify(selected)) setStoredCourses(selected);
  }, [storedCourses, selected, setStoredCourses]);

  const selectCourse = course => {
    if (selected.some(item => item.classId === course.classId)) {
      setStoredCourses(current => removeCourse(current, course.classId));
    } else if (getConflictingCourses(selected, course).length) {
      setPendingCourse(course);
    } else {
      setStoredCourses(current => replaceConflictingCourses(current, course));
    }
  };

  const cancelReplacement = useCallback(() => setPendingCourse(null), []);
  return {
    selected,
    selectCourse,
    deleteCourse: classId => setStoredCourses(current => removeCourse(current, classId)),
    pendingCourse,
    conflicts: pendingCourse ? getConflictingCourses(selected, pendingCourse) : [],
    cancelReplacement,
    confirmReplacement: () => {
      if (pendingCourse) setStoredCourses(current => replaceConflictingCourses(current, pendingCourse));
      setPendingCourse(null);
    }
  };
}
