import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../component/Header';
import {
  BOARD_STORAGE_KEY,
  boardReactions,
  boardSamples,
  emptyBoardReactions,
  parseBoardReactions,
  toggleBoardReaction,
} from '../data/boardSamples';
import '../styles/container/TimetableBoard.scss';

const weekdays = ['월', '화', '수', '목', '금'];
const hours = Array.from({ length: 9 }, (_, index) => index + 9);

function SampleTimetable({ sample }) {
  return (
    <div className="timetableBoard__scheduleWrap" tabIndex={0} role="region" aria-label={`${sample.title} 시간표 영역`}>
      <table className="timetableBoard__schedule">
        <caption>{sample.title} — 샘플 시간표</caption>
        <thead>
          <tr>
            <th scope="col">시간</th>
            {weekdays.map((day) => <th scope="col" key={day}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <th scope="row">{hour}:00</th>
              {weekdays.map((day, dayIndex) => {
                const course = sample.courses.find(
                  (entry) => entry.day === dayIndex && entry.start <= hour && entry.end > hour
                );
                if (course && course.start !== hour) return null;

                return course ? (
                  <td
                    key={day}
                    rowSpan={course.end - course.start}
                    className={`timetableBoard__course timetableBoard__course--${course.color}`}
                  >
                    <span>{course.name}</span>
                    <small>{course.start}–{course.end}시</small>
                  </td>
                ) : <td key={day} />;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TimetableBoard() {
  const [reactions, setReactions] = useState(() => {
    try {
      return parseBoardReactions(window.localStorage.getItem(BOARD_STORAGE_KEY));
    } catch {
      return emptyBoardReactions();
    }
  });
  const [storageUnavailable, setStorageUnavailable] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(BOARD_STORAGE_KEY, JSON.stringify(reactions));
      setStorageUnavailable(false);
    } catch {
      setStorageUnavailable(true);
    }
  }, [reactions]);

  return (
    <>
      <HelmetProvider>
        <Helmet><title>학우들의 시간표 | 시간표 도우미</title></Helmet>
      </HelmetProvider>
      <Header />
      <main className="timetableBoard">
        <div className="timetableBoard__title">
          <span className="timetableBoard__badge">샘플 시간표</span>
          <h1>학우들의 시간표 보러가기</h1>
        </div>
        <p className="timetableBoard__intro">
          다양한 시간표 구성을 살펴보고 마음에 드는 시간표에 반응을 남겨보세요.
        </p>
        <p className="timetableBoard__notice">
          아래 시간표는 체험용 예시입니다. 반응 수는 실제 학생들의 평가가 아니라,
          이 브라우저에서 선택한 반응만 표시합니다.
        </p>
        <div className="timetableBoard__main">
          {boardSamples.map((sample, sampleIndex) => (
            <article className="timetableBoard__card" key={sample.id}>
              <div className="timetableBoard__cardTitle">
                <span>샘플 {String(sampleIndex + 1).padStart(2, '0')}</span>
                <h2>{sample.title}</h2>
                <p>{sample.description}</p>
              </div>
              <SampleTimetable sample={sample} />
              <div className="timetableBoard__reactions" role="group" aria-label={`${sample.title}에 반응 남기기`}>
                {boardReactions.map((reaction, reactionIndex) => {
                  const selected = reactions[sample.id][reactionIndex];
                  return (
                    <button
                      key={reaction.label}
                      type="button"
                      aria-pressed={selected}
                      aria-label={`${sample.title}: ${reaction.label} ${selected ? 1 : 0}개`}
                      onClick={() => setReactions((current) => toggleBoardReaction(current, sample.id, reactionIndex))}
                    >
                      <span aria-hidden="true">{reaction.emoji}</span>
                      <span>{reaction.label}</span>
                      <strong>{selected ? 1 : 0}</strong>
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
        <p className="timetableBoard__storageNote" role="status">
          {storageUnavailable
            ? '현재 브라우저에서 저장을 사용할 수 없어, 반응은 이 페이지를 보는 동안만 유지됩니다.'
            : '반응은 다시 누르면 취소되며, 이 브라우저에만 저장됩니다.'}
        </p>
      </main>
    </>
  );
}
