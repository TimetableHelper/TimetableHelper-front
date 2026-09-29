import React, { useMemo, useState } from 'react';
import { courses } from '../../data/courses';
import ShowClassList from '../show-class-list';
import '../../styles/component/search-class-list.scss';
import '../../styles/container/class-info-list.scss';

const KEYWORDS = ['가벼운 타과 전공', '건강을 위한', '토론이 많은', '실습 위주의', '다양한 지식을 쌓는'];
export default function SearchClassList({
  selected = [],
  onSelect
}) {
  const [query, setQuery] = useState('');
  const [keyword, setKeyword] = useState('');
  const matchingCourses = useMemo(() => courses.filter(course => `${course.className} ${course.Professor}`.toLowerCase().includes(query.trim().toLowerCase()) && (!keyword || course.keyWords.includes(keyword))), [query, keyword]);
  return (
    <section
      className="course-panel course-search"
      aria-labelledby="search-courses-title"
    >
      <div className="course-panel__heading">
        <h2 id="search-courses-title">강의 찾아보기</h2>
        <span>{matchingCourses.length}개 강의</span>
      </div>
      <div className="course-search__controls">
        <label htmlFor="course-search-input">과목명 또는 교수명</label>
        <input
          id="course-search-input"
          type="search"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="듣고 싶은 강의를 찾아보세요"
        />
        <div
          className="course-search__keywords"
          aria-label="강의 키워드"
        >
          {KEYWORDS.map(item => (
            <button
              key={item}
              type="button"
              aria-pressed={keyword === item}
              className={keyword === item ? 'is-active' : ''}
              onClick={() => setKeyword(keyword === item ? '' : item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <ShowClassList
        classArray={matchingCourses}
        selected={selected}
        onSelect={onSelect}
      />
    </section>
  );
}
