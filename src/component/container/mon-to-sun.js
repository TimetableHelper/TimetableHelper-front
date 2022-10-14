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

  return (
    <div className="timetable">
      <ul className="list-group col-2" id="mon">
        <li>월</li>
        {myMonClassArray.map((data) => {
          return (
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
