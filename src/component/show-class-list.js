import React from 'react';
import '../styles/container/gridscss.scss';

export default function ShowClassList({
  classArray,
  selected = [],
  onSelect
}) {
  const selectedIds = new Set(selected.map(course => course.classId));
  return (
    <div className="course-list">
      {classArray.length === 0 ? <p className="course-list__empty">조건에 맞는 강의가 없어요. 검색어나 키워드를 바꿔보세요.</p> : classArray.map(course => {
        const isSelected = selectedIds.has(course.classId);
        return (
          <button
            key={course.classId}
            type="button"
            className={`course-row${isSelected ? ' course-row--selected' : ''}`}
            aria-pressed={isSelected}
            aria-label={`${course.className}, ${course.Professor}, ${course.ClassTime} ${isSelected ? '선택 해제' : '추가'}`}
            onClick={() => onSelect(course)}
          >
            <span className="course-row__name">
              <strong>
                {course.className}
              </strong>
              <span>
                {course.Professor}
              </span>
            </span>
            <span className="course-row__details">
              <strong>
                {course.ClassTime}
              </strong>
              <span>{course.lectureRoom} · {course.Grades}학점</span>
              <span>
                {course.Classification}
              </span>
            </span>
            <span
              className="course-row__action"
              aria-hidden="true"
            >
              {isSelected ? '✓' : '+'}
            </span>
          </button>
        );
      })}
    </div>
  );
}
