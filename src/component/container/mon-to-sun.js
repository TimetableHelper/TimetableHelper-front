import React, { useState } from 'react';
import '../../styles/component/mon-to-sun.scss';
import classnames from 'classnames';

/* 클릭 이벤트 구현 

1. 클릭이벤트로 클래스명 추가해서 배경화면 & 텍스트 채우기

2. useState([ ]) 로  수업들을 담을 빈 배열을 만들고,
수업목록에서 클릭하면 ->  배열에 추가하며 리렌더링

*/

export function Timetable() {
  const [focus, setFocus] = useState(false);
  const [myClassList, setMyClassList] = useState([]);
  return (
    <div className="timetable">
      <ul className="list-group col-2" id="mon">
        <li>월</li>
        <li
          className={classnames('list-group t-1', {
            'focused-classtime-t-1': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-2', {
            'focused-classtime-t-2': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-3', {
            'focused-classtime-t-3': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-4', {
            'focused-classtime-t-4': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-5', {
            'focused-classtime-t-5': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-6', {
            'focused-classtime-t-6': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-7', {
            'focused-classtime-t-7': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-8', {
            'focused-classtime-t-8': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-9', {
            'focused-classtime-t-9': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-10', {
            'focused-classtime-t-10': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-11', {
            'focused-classtime-t-11': focus,
          })}
        ></li>
      </ul>
      <ul className="list-group col-2" id="tue">
        <li>화</li>
        <li
          className={classnames('list-group t-1', {
            'focused-classtime-t-1': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-2', {
            'focused-classtime-t-2': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-3', {
            'focused-classtime-t-3': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-4', {
            'focused-classtime-t-4': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-5', {
            'focused-classtime-t-5': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-6', {
            'focused-classtime-t-6': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-7', {
            'focused-classtime-t-7': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-8', {
            'focused-classtime-t-8': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-9', {
            'focused-classtime-t-9': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-10', {
            'focused-classtime-t-10': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-11', {
            'focused-classtime-t-11': focus,
          })}
        ></li>
      </ul>
      <ul className="list-group col-2" id="wed">
        <li>수</li>
        <li
          className={classnames('list-group t-1', {
            'focused-classtime-t-1': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-2', {
            'focused-classtime-t-2': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-3', {
            'focused-classtime-t-3': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-4', {
            'focused-classtime-t-4': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-5', {
            'focused-classtime-t-5': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-6', {
            'focused-classtime-t-6': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-7', {
            'focused-classtime-t-7': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-8', {
            'focused-classtime-t-8': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-9', {
            'focused-classtime-t-9': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-10', {
            'focused-classtime-t-10': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-11', {
            'focused-classtime-t-11': focus,
          })}
        ></li>
      </ul>
      <ul className="list-group col-2" id="thu">
        <li>목</li>
        <li
          className={classnames('list-group t-1', {
            'focused-classtime-t-1': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-2', {
            'focused-classtime-t-2': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-3', {
            'focused-classtime-t-3': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-4', {
            'focused-classtime-t-4': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-5', {
            'focused-classtime-t-5': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-6', {
            'focused-classtime-t-6': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-7', {
            'focused-classtime-t-7': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-8', {
            'focused-classtime-t-8': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-9', {
            'focused-classtime-t-9': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-10', {
            'focused-classtime-t-10': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-11', {
            'focused-classtime-t-11': focus,
          })}
        ></li>
      </ul>
      <ul className="list-group col-2" id="fri">
        <li>금</li>
        <li
          className={classnames('list-group t-1', {
            'focused-classtime-t-1': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-2', {
            'focused-classtime-t-2': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-3', {
            'focused-classtime-t-3': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-4', {
            'focused-classtime-t-4': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-5', {
            'focused-classtime-t-5': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-6', {
            'focused-classtime-t-6': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-7', {
            'focused-classtime-t-7': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-8', {
            'focused-classtime-t-8': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-9', {
            'focused-classtime-t-9': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-10', {
            'focused-classtime-t-10': focus,
          })}
        ></li>
        <li
          className={classnames('list-group t-11', {
            'focused-classtime-t-11': focus,
          })}
        ></li>
      </ul>
    </div>
  );
}

export default Timetable;
