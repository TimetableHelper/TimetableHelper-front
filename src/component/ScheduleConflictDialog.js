import React, { useEffect, useRef } from 'react';
import '../styles/container/OverlapModal.scss';

export default function ScheduleConflictDialog({
  course,
  conflicts,
  onCancel,
  onConfirm
}) {
  const dialog = useRef(null);
  const cancelButton = useRef(null);
  useEffect(() => {
    if (!course) return undefined;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    cancelButton.current?.focus();

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCancel();
      }

      if (event.key !== 'Tab') return;
      const buttons = dialog.current?.querySelectorAll('button');
      if (!buttons?.length) return;
      const first = buttons[0];
      const last = buttons[buttons.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [course, onCancel]);
  if (!course) return null;
  return (
    <div
      className="schedule-modal-backdrop"
      onClick={onCancel}
    >
      <section
        ref={dialog}
        className="schedule-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="overlap-title"
        aria-describedby="overlap-description"
        onClick={event => event.stopPropagation()}
      >
        <span className="schedule-modal__eyebrow">겹치는 수업 시간</span>
        <h2 id="overlap-title">이 강의로 바꿀까요?</h2>
        <p id="overlap-description"><strong>
          {course.className}
        </strong>을 추가하면 아래 {conflicts.length}개 강의가 시간표에서 빠져요.</p>
        <ul>
          {conflicts.map(item => (
            <li key={item.classId}>
              <strong>
                {item.className}
              </strong>
              <span>{item.Professor} · {item.ClassTime}</span>
            </li>
          ))}
        </ul>
        <div className="schedule-modal__actions">
          <button
            ref={cancelButton}
            type="button"
            onClick={onCancel}
          >기존 강의 유지</button>
          <button
            type="button"
            className="schedule-modal__confirm"
            onClick={onConfirm}
          >겹치는 강의 교체</button>
        </div>
      </section>
    </div>
  );
}
