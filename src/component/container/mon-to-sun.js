import React, { useState } from 'react';
import '../../styles/component/mon-to-sun.scss';
import classnames from 'classnames';

import { useRecoilValue, useRecoilState } from 'recoil';
import {
  finalClassArray,
  finalClassIdsAtom,
  MonClassArray,
  TueClassArray,
  WenClassArray,
  ThuClassArray,
  FriClassArray,
  MonClassIds,
  TueClassIds,
  WenClassIds,
  ThuClassIds,
  FriClassIds,
  mondayClassListAtom,
  tuedayClassListAtom,
  wendayClassListAtom,
  thudayClassListAtom,
  fridayClassListAtom,
} from '../../atoms';

import {
  defineColor,
  defineHeight,
} from '../../utils/component/container/monToSun';

export function Timetable() {
  const [finalClassArr, setFinalClassArr] = useRecoilState(finalClassArray);
  const [finalClassIds, setFinalClassIds] = useRecoilState(finalClassIdsAtom);

  const [myMonClassArray, setMyMonClassArray] = useRecoilState(MonClassArray);
  const [myMonClassIds, setMyMonClassIds] = useRecoilState(MonClassIds);

  const [myTueClassArray, setMyTueClassArray] = useRecoilState(TueClassArray);
  const [myTueClassIds, setMyTueClassIds] = useRecoilState(TueClassIds);

  const [myWenClassArray, setMyWenClassArray] = useRecoilState(WenClassArray);
  const [myWenClassIds, setMyWenClassIds] = useRecoilState(WenClassIds);

  const [myThuClassArray, setMyThuClassArray] = useRecoilState(ThuClassArray);
  const [myThuClassIds, setMyThuClassIds] = useRecoilState(ThuClassIds);

  const [myFriClassArray, setMyFriClassArray] = useRecoilState(FriClassArray);
  const [myFriClassIds, setMyFriClassIds] = useRecoilState(FriClassIds);

  // classList

  const [mondayClassList, setMondayClassList] =
    useRecoilState(mondayClassListAtom);
  const [tuedayClassList, setTuedayClassList] =
    useRecoilState(tuedayClassListAtom);
  const [wendayClassList, setWendayClassList] =
    useRecoilState(wendayClassListAtom);
  const [thudayClassList, setThudayClassList] =
    useRecoilState(thudayClassListAtom);
  const [fridayClassList, setFridayClassList] =
    useRecoilState(fridayClassListAtom);

  const onDelete = (wantDeleteID) => {
    // ??????
    var newFinalList = [...finalClassArr];
    setFinalClassArr(
      newFinalList.filter((data) => data.classId !== wantDeleteID)
    );
    var newFinalIDs = [...finalClassIds];
    setFinalClassIds(newFinalIDs.filter((data) => data !== wantDeleteID));

    // ?????????
    var newMonList = [...myMonClassArray];
    setMyMonClassArray(
      newMonList.filter((data) => data.classId !== wantDeleteID)
    );
    var newMonIDs = [...myMonClassIds];
    setMyMonClassIds(newMonIDs.filter((data) => data !== wantDeleteID));
    var newMonCL = [...mondayClassList];
    setMondayClassList(
      newMonCL.filter((data) => data.classId !== wantDeleteID)
    );
    //?????????
    var newTueList = [...myTueClassArray];
    setMyTueClassArray(
      newTueList.filter((data) => data.classId !== wantDeleteID)
    );
    var newTueIDs = [...myTueClassIds];
    setMyTueClassIds(newTueIDs.filter((data) => data !== wantDeleteID));
    var newTueCL = [...tuedayClassList];
    setTuedayClassList(
      newTueCL.filter((data) => data.classId !== wantDeleteID)
    );
    // ?????????
    var newWendayList = [...myWenClassArray];
    setMyWenClassArray(
      newWendayList.filter((data) => data.classId !== wantDeleteID)
    );
    var newWendayIDs = [...myWenClassIds];
    setMyWenClassIds(newWendayIDs.filter((data) => data !== wantDeleteID));
    var newWenCL = [...wendayClassList];
    setWendayClassList(
      newWenCL.filter((data) => data.classId !== wantDeleteID)
    );

    // ?????????
    var newThudayList = [...myThuClassArray];
    setMyThuClassArray(
      newThudayList.filter((data) => data.classId !== wantDeleteID)
    );
    var newThudayIDs = [...myThuClassIds];
    setMyThuClassIds(newThudayIDs.filter((data) => data !== wantDeleteID));
    var newThuCL = [...thudayClassList];
    setThudayClassList(
      newThuCL.filter((data) => data.classId !== wantDeleteID)
    );

    // ?????????
    var newFridayList = [...myFriClassArray];
    setMyFriClassArray(
      newFridayList.filter((data) => data.classId !== wantDeleteID)
    );
    var newFridayIDs = [...myFriClassIds];
    setMyFriClassIds(newFridayIDs.filter((data) => data !== wantDeleteID));
    var newFriCL = [...fridayClassList];
    setFridayClassList(
      newFriCL.filter((data) => data.classId !== wantDeleteID)
    );
  };

  return (
    <div className="timetable">
      <ul className="list-group col-2" id="mon">
        <li>???</li>
        {myMonClassArray.map((data) => {
          return (
            <div
              className="timetable-list-day-div"
              key={data.classId}
              style={{
                position: 'absolute',
                top: defineHeight(data.firstClassNum),
                left: 100,
                width: '136.5px',
                backgroundColor: defineColor(data.numberOfPresses),
                height: `${data.continuity * 75}px`,
              }}
            >
              <span>{data.className}</span>
              <span>{data.Professor}</span>
              <span>{data.lectureRoom}</span>
              <button onClick={() => onDelete(data.classId)}>X</button>
            </div>
          );
        })}
      </ul>
      <ul className="list-group col-2" id="tue">
        <li>???</li>
        {myTueClassArray.map((data) => {
          return (
            <div
              className="timetable-list-day-div"
              key={data.classId}
              style={{
                position: 'absolute',
                top: defineHeight(data.firstClassNum),
                left: 100 + 137,
                width: '136.5px',
                backgroundColor: defineColor(data.numberOfPresses),
                height: `${data.continuity * 75}px`,
              }}
            >
              <span>{data.className}</span>
              <span>{data.Professor}</span>
              <span>{data.lectureRoom}</span>
              <button onClick={() => onDelete(data.classId)}>X</button>
            </div>
          );
        })}
      </ul>
      <ul className="list-group col-2" id="wed">
        <li>???</li>
        {myWenClassArray.map((data) => {
          return (
            <div
              className="timetable-list-day-div"
              key={data.classId}
              style={{
                position: 'absolute',
                top: defineHeight(data.firstClassNum),
                left: 100 + 137 * 2,
                width: '136.5px',
                backgroundColor: defineColor(data.numberOfPresses),
                height: `${data.continuity * 75}px`,
              }}
            >
              <span>{data.className}</span>
              <span>{data.Professor}</span>
              <span>{data.lectureRoom}</span>
              <button onClick={() => onDelete(data.classId)}>X</button>
            </div>
          );
        })}
      </ul>
      <ul className="list-group col-2" id="thu">
        <li>???</li>
        {myThuClassArray.map((data) => {
          return (
            <div
              className="timetable-list-day-div"
              key={data.classId}
              style={{
                position: 'absolute',
                top: defineHeight(data.firstClassNum),
                left: 100 + 137 * 3 - 1,
                width: '136.5px',
                backgroundColor: defineColor(data.numberOfPresses),
                height: `${data.continuity * 75}px`,
              }}
            >
              <span>{data.className}</span>
              <span>{data.Professor}</span>
              <span>{data.lectureRoom}</span>
              <button onClick={() => onDelete(data.classId)}>X</button>
            </div>
          );
        })}
      </ul>
      <ul className="list-group col-2" id="fri">
        <li>???</li>
        {myFriClassArray.map((data) => {
          return (
            <div
              className="timetable-list-day-div"
              key={data.classId}
              style={{
                position: 'absolute',
                top: defineHeight(data.firstClassNum),
                left: 100 + 137 * 4 - 1,
                width: '136.5px',
                backgroundColor: defineColor(data.numberOfPresses),
                height: `${data.continuity * 75}px`,
              }}
            >
              <span>{data.className}</span>
              <span>{data.Professor}</span>
              <span>{data.lectureRoom}</span>
              <button onClick={() => onDelete(data.classId)}>X</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Timetable;
