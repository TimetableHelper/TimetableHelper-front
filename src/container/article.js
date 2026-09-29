import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../component/Header';
import ClassList from '../component/select-class-schedule';
import ScheduleConflictDialog from '../component/ScheduleConflictDialog';
import useTimetable from '../utils/useTimetable';
import '../styles/container/article.scss';

export default function Article() {
  const timetable = useTimetable();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>필수 과목 선택 · 시간표 도우미</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <main className="required-page">
        <div className="required-page__intro">
          <span className="required-page__step">01 · 필수 과목 선택</span>
          <h1 className="article__title">이번 학기, 꼭 들어야 할 과목부터</h1>
          <p className="article__sub-title">필수 과목을 먼저 골라주세요. 다음 화면에서 다른 강의를 추가하거나 선택을 바꿀 수 있어요.</p>
        </div>
        <ClassList
          selected={timetable.selected}
          onSelect={timetable.selectCourse}
        />
        <div className="required-page__actions">
          <span aria-live="polite">현재 {timetable.selected.length}개 강의를 선택했어요</span>
          <Link
            className="required-page__next"
            to="/my-timetable"
          >시간표 짜러가기 <span aria-hidden="true">→</span></Link>
        </div>
        <p className="required-page__note">현재 화면은 예시 강의를 사용합니다. 선택 없이 다음으로 넘어가도 괜찮아요.</p>
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
