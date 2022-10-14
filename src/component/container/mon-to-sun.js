import React, { useState } from 'react';
import '../../styles/component/mon-to-sun.scss';
import classnames from 'classnames';

import { useRecoilValue } from 'recoil';
import {
  MonClassArray,
  TueClassArray,
  WenClassArray,
  ThuClassArray,
  FriClassArray,
} from '../../atoms';

/* 클릭 이벤트 구현 

1. 클릭이벤트로 클래스명 추가해서 배경화면 & 텍스트 채우기

2. useState([ ]) 로  수업들을 담을 빈 배열을 만들고,
수업목록에서 클릭하면 ->  배열에 추가하며 리렌더링

*/

export function Timetable() {
  const [focus, setFocus] = useState(false);

  const myMonClassArray = useRecoilValue(MonClassArray);
  const myTueClassArray = useRecoilValue(TueClassArray);
  const myWenClassArray = useRecoilValue(WenClassArray);
  const myThuClassArray = useRecoilValue(ThuClassArray);
  const myFriClassArray = useRecoilValue(FriClassArray);

  function defineColor(num) {
    if (num % 10 === 1) return '#768FFF';
    if (num % 10 === 2) return '#B47CFF';
    if (num % 10 === 3) return '#8F9BFF';
    if (num % 10 === 4) return '#64C1FF';
    if (num % 10 === 5) return '#62EBFF';
    if (num % 10 === 6) return '#9FFFE0';
    if (num % 10 === 7) return '#FFE5B5';
    if (num % 10 === 8) return '#FFD0B0';
    if (num % 10 === 9) return '#FFBCAF';
    if (num % 10 === 0) return '#FFB2DD';
  }
  function defineHeight(num) {
    return num * 48 + 24;
  }

  return (
    <div className="timetable">
      <ul className="list-group col-2" id="mon">
        <li>월</li>
        {myMonClassArray.map((data) => {
          return (
            <div
              className="timetable-list-day-div"
              key={data.classId}
              style={{
                position: 'absolute',
                top: defineHeight(data.firstClassNum),
                left: 0,
                width: '116.5px',
                backgroundColor: defineColor(data.numberOfPresses),
                height: `${data.continuity * 48}px`,
              }}
            >
              <span>{data.className}</span>
              <span>{data.Professor}</span>
              <span>{data.lectureRoom}</span>
            </div>
          );
        })}
      </ul>
      <ul className="list-group col-2" id="tue">
        <li>화</li>
        {myTueClassArray.map((data) => {
          return (
            <div
              className="timetable-list-day-div"
              key={data.classId}
              style={{
                position: 'absolute',
                top: defineHeight(data.firstClassNum),
                left: 117,
                width: '116.5px',
                backgroundColor: defineColor(data.numberOfPresses),
                height: `${data.continuity * 48}px`,
              }}
            >
              <span>{data.className}</span>
              <span>{data.Professor}</span>
              <span>{data.lectureRoom}</span>
            </div>
          );
        })}
      </ul>
      <ul className="list-group col-2" id="wed">
        <li>수</li>
        {myWenClassArray.map((data) => {
          return (
            <div
              className="timetable-list-day-div"
              key={data.classId}
              style={{
                position: 'absolute',
                top: defineHeight(data.firstClassNum),
                left: 117 * 2,
                width: '116.5px',
                backgroundColor: defineColor(data.numberOfPresses),
                height: `${data.continuity * 48}px`,
              }}
            >
              <span>{data.className}</span>
              <span>{data.Professor}</span>
              <span>{data.lectureRoom}</span>
            </div>
          );
        })}
      </ul>
      <ul className="list-group col-2" id="thu">
        <li>목</li>
        {myThuClassArray.map((data) => {
          return (
            <div
              className="timetable-list-day-div"
              key={data.classId}
              style={{
                position: 'absolute',
                top: defineHeight(data.firstClassNum),
                left: 117 * 3,
                width: '116.5px',
                backgroundColor: defineColor(data.numberOfPresses),
                height: `${data.continuity * 48}px`,
              }}
            >
              <span>{data.className}</span>
              <span>{data.Professor}</span>
              <span>{data.lectureRoom}</span>
            </div>
          );
        })}
      </ul>
      <ul className="list-group col-2" id="fri">
        <li>금</li>
        {myFriClassArray.map((data) => {
          return (
            <div
              className="timetable-list-day-div"
              key={data.classId}
              style={{
                position: 'absolute',
                top: defineHeight(data.firstClassNum),
                left: 117 * 4,
                width: '116.5px',
                backgroundColor: defineColor(data.numberOfPresses),
                height: `${data.continuity * 48}px`,
              }}
            >
              <span>{data.className}</span>
              <span>{data.Professor}</span>
              <span>{data.lectureRoom}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Timetable;
