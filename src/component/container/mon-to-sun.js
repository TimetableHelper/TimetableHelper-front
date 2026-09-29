import React from 'react';
import { getCourseColor, getCourseMeetings, PERIOD_COUNT, WEEKDAYS } from '../../utils/schedule';
import '../../styles/component/mon-to-sun.scss';

export function Timetable({
  courses = [],
  onDelete
}) {
  const meetings = courses.flatMap(getCourseMeetings);
  return (
    <div
      className="timetable-scroll"
      role="region"
      aria-label="주간 시간표. 좁은 화면에서는 좌우로 스크롤할 수 있습니다."
      tabIndex={0}
    >
      <div className="timetable">
        <div className="timetable__hours">
          <div className="timetable__day">교시</div>
          {Array.from({
            length: PERIOD_COUNT
          }, (_, i) => (
            <div
              className="timetable__period"
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
        {WEEKDAYS.map(day => (
          <div
            className="timetable__column"
            key={day}
            aria-label={`${day}요일`}
          >
            <div className="timetable__day">
              {day}
            </div>
            <div className="timetable__day-body">
              {meetings.filter(meeting => meeting.day === day).map(({
                start,
                length,
                course
              }, index) => (
                <div
                  key={`${course.classId}-${index}`}
                  className={`timetable-class${length === 1 ? ' timetable-class--single' : ''}`}
                  style={{
                    top: `${(start - 1) * 64}px`,
                    height: `${length * 64}px`,
                    backgroundColor: getCourseColor(course.classId)
                  }}
                >
                  <strong title={course.className}>
                    {course.className}
                  </strong>
                  <span>
                    {course.Professor}
                  </span>
                  {length > 1 && (
                    <span>
                      {course.lectureRoom}
                    </span>
                  )}
                  <button
                    type="button"
                    className="timetable-class__delete"
                    aria-label={`${course.className}, ${course.Professor} 시간표에서 삭제`}
                    onClick={() => onDelete(course.classId)}
                  >×</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Timetable;
