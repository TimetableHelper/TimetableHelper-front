import React from 'react';
import { courses } from '../data/courses';
import ShowClassList from './show-class-list';
import '../styles/container/class-info-list.scss';

export { courses as exServerData } from '../data/courses';
export default function ClassList({
  selected = [],
  onSelect
}) {
  const requiredCourses = courses.filter(course => course.Classification.includes('필수'));
  return (
    <section
      className="course-panel"
      aria-labelledby="required-courses-title"
    >
      <div className="course-panel__heading">
        <h2 id="required-courses-title">필수 과목</h2>
        <span>{requiredCourses.length}개 강의</span>
      </div>
      <p className="course-panel__hint">강의를 선택하면 시간표에 추가돼요. 다시 누르면 선택을 해제할 수 있어요.</p>
      <ShowClassList
        classArray={requiredCourses}
        selected={selected}
        onSelect={onSelect}
      />
    </section>
  );
}
