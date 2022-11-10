import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRecoilValue } from 'recoil';
import { isLoginIn } from '../atoms';

import Timetable from '../component/container/mon-to-sun';
import ClassList from '../component/select-class-schedule';
import SearchClassList from '../component/container/search-class-list';
import Header from '../component/Header';

import '../styles/container/select-in-classlist.scss';
import 'animate.css';
import { useRecoilState } from 'recoil';
import {
  finalClassArray,
  finalClassIdsAtom,
  MonClassArray,
  MonClassIds,
  TueClassArray,
  TueClassIds,
  WenClassArray,
  WenClassIds,
  ThuClassArray,
  ThuClassIds,
  FriClassArray,
  FriClassIds,
  numberOfPressesAtom,
  nowClickClassData,
  nowClickClassDataArray,
  mondayClassListAtom,
  tuedayClassListAtom,
  wendayClassListAtom,
  thudayClassListAtom,
  fridayClassListAtom,
} from '../atoms';

import '../styles/container/OverlapModal.scss';

function MyTimetable() {
  ///////// 로그인 체크
  const islogin = useRecoilValue(isLoginIn);
  const [showModal, setshowModal] = useState(true);
  useEffect(() => {
    if (!islogin) {
      setshowModal(true);
      //  alert('로그인이 필요한 페이지입니다.');
      //      document.location.href = '/';
    } else if (islogin) {
      setshowModal(false);
    }
  }, []);

  //////// 수업 겹침 경고문 코드      //////////////////////
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

  // 마지막으로 클릭한 수업의 데이터
  const [nowClickClass, setNowClickClass] = useRecoilState(nowClickClassData);
  const [nowClickClassArray, setNowClickClassArray] = useRecoilState(
    nowClickClassDataArray
  );

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

  //  console.log('nowClickClass', nowClickClass);

  //  현재 클릭한 수업의 데이터를
  // nowClickClassDataArray에 담음.

  const [showOverlapModal, setShowOverlapModal] = useState(false);

  const [existingclass, setExistingClass1] = useState('');
  const [newAddclass, setNewAddClass] = useState('');

  const viewOverlapModal = (exist, newAdd) => {
    setExistingClass1(exist);
    setNewAddClass(newAdd);

    setShowOverlapModal(true);
  };

  // 현재 클릭한 수업 데이터 담기
  useEffect(() => {
    // 임시 저장용 array
    var forSetClassArray = [];

    if (nowClickClass && nowClickClass.ClassTime) {
      if (nowClickClass.ClassTime.split(',')[0]) {
        // [0] == 클릭한 수업의 첫번째 요일
        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '월') {
          // 월요일
          console.log('월');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '월',
            firstClassNum: nowClickClass.ClassTime.split(',')[0].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[0],
          });
        }
        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '화') {
          // 화요일
          console.log('화');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '화',
            firstClassNum: nowClickClass.ClassTime.split(',')[0].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[0],
          });
        }
        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '수') {
          // 수요일
          console.log('수');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '수',
            firstClassNum: nowClickClass.ClassTime.split(',')[0].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[0],
          });
        }
        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '목') {
          // 목요일
          console.log('목');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '목',
            firstClassNum: nowClickClass.ClassTime.split(',')[0].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[0],
          });
        }
        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '금') {
          // 금요일
          console.log('금');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '금',
            firstClassNum: nowClickClass.ClassTime.split(',')[0].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[0],
          });
        }
      }

      if (nowClickClass.ClassTime.split(',')[1]) {
        // [1] == 클릭한 수업의 두번째 요일
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '월') {
          // 월요일
          console.log('월2');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '월',
            firstClassNum: nowClickClass.ClassTime.split(',')[1].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[1],
          });
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '화') {
          // 화요일
          console.log('화2');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '화',
            firstClassNum: nowClickClass.ClassTime.split(',')[1].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[1],
          });
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '수') {
          // 수요일
          console.log('수2');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '수',
            firstClassNum: nowClickClass.ClassTime.split(',')[1].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[1],
          });
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '목') {
          // 목요일
          console.log('목2');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '목',
            firstClassNum: nowClickClass.ClassTime.split(',')[1].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[1],
          });
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '금') {
          // 금요일
          console.log('금2');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '금',
            firstClassNum: nowClickClass.ClassTime.split(',')[1].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[1],
          });
        }
      }

      if (nowClickClass.ClassTime.split(',')[2]) {
        // [2] == 클릭한 수업의 세번째 요일
        if (nowClickClass.ClassTime.split(',')[2].substr(0, 1) === '월') {
          // 월요일
          console.log('월3');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '월',
            firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[2],
          });
        }
        if (nowClickClass.ClassTime.split(',')[2].substr(0, 1) === '화') {
          // 화요일
          console.log('화3');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '화',
            firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[2],
          });
        }
        if (nowClickClass.ClassTime.split(',')[2].substr(0, 1) === '수') {
          // 수요일
          console.log('수3');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '수',
            firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[2],
          });
        }
        if (nowClickClass.ClassTime.split(',')[2].substr(0, 1) === '목') {
          // 목요일
          console.log('목3');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '목',
            firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[2],
          });
        }
        if (nowClickClass.ClassTime.split(',')[2].substr(0, 1) === '금') {
          // 금요일
          console.log('금3');

          forSetClassArray.push({
            classId: nowClickClass.classId,
            day: '금',
            firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[2],
          });
        }
      }
    }

    // 클릭한 수업의 데이터를 담고,
    setNowClickClassArray(forSetClassArray);
    // 담은 이후에 초기화
    forSetClassArray = [];
  }, [nowClickClass]);
  //  console.log('nowClickClassArray', nowClickClassArray);

  // 경고문 활성화 코드
  useEffect(() => {
    let forMon = [...mondayClassList];
    let forTue = [...tuedayClassList];
    let forWen = [...wendayClassList];
    let forThu = [...thudayClassList];
    let forFri = [...fridayClassList];

    for (var m = 0; m < myMonClassArray.length; m++) {
      if (myMonClassArray[m]) {
        if (myMonClassArray[m].firstClassNum) {
          for (
            var i = +myMonClassArray[m].firstClassNum;
            i <
            +myMonClassArray[m].firstClassNum + myMonClassArray[m].continuity;
            i++
          ) {
            if (
              mondayClassList.findIndex((x) => x.ClassTime === i) === -1
              // 겹침이 없다면 그냥 추가
            ) {
              forMon.push({
                ClassTime: i,
                classId: myMonClassArray[m].classId,
                ClassName: myMonClassArray[m].className,
              });
            }
          }
        }
      }
    }
    for (var t = 0; t < myTueClassArray.length; t++) {
      if (myTueClassArray[t]) {
        if (myTueClassArray[t].firstClassNum) {
          for (
            var u = +myTueClassArray[t].firstClassNum;
            u <
            +myTueClassArray[t].firstClassNum + myTueClassArray[t].continuity;
            u++
          ) {
            if (tuedayClassList.findIndex((x) => x.ClassTime === u) === -1) {
              forTue.push({
                ClassTime: u,
                classId: myTueClassArray[t].classId,
                ClassName: myTueClassArray[t].className,
              });
            }
          }
        }
      }
    }

    for (var w = 0; w < myWenClassArray.length; w++) {
      if (myWenClassArray[w]) {
        if (myWenClassArray[w].firstClassNum) {
          for (
            var y = +myWenClassArray[w].firstClassNum;
            y <
            +myWenClassArray[w].firstClassNum + myWenClassArray[w].continuity;
            y++
          ) {
            if (wendayClassList.findIndex((x) => x.ClassTime === y) === -1) {
              forWen.push({
                ClassTime: y,
                classId: myWenClassArray[w].classId,
                ClassName: myWenClassArray[w].className,
              });
            }
          }
        }
      }
    }
    for (var h = 0; h < myThuClassArray.length; h++) {
      if (myThuClassArray[h]) {
        if (myThuClassArray[h].firstClassNum) {
          for (
            var r = +myThuClassArray[h].firstClassNum;
            r <
            +myThuClassArray[h].firstClassNum + myThuClassArray[h].continuity;
            r++
          ) {
            if (thudayClassList.findIndex((x) => x.ClassTime === r) === -1) {
              forThu.push({
                ClassTime: r,
                classId: myThuClassArray[h].classId,
                ClassName: myThuClassArray[h].className,
              });
            }
          }
        }
      }
    }
    for (var f = 0; f < myFriClassArray.length; f++) {
      if (myFriClassArray[f]) {
        if (myFriClassArray[f].firstClassNum) {
          for (
            var e = +myFriClassArray[f].firstClassNum;
            e <
            +myFriClassArray[f].firstClassNum + myFriClassArray[f].continuity;
            e++
          ) {
            if (fridayClassList.findIndex((x) => x.ClassTime === e) === -1) {
              forFri.push({
                ClassTime: e,
                classId: myFriClassArray[f].classId,
                ClassName: myFriClassArray[f].className,
              });
            }
          }
        }
      }
    }

    setMondayClassList(forMon);
    setTuedayClassList(forTue);
    setWendayClassList(forWen);
    setThudayClassList(forThu);
    setFridayClassList(forFri);

    // 위에 코드완성하면
    // 이후에

    //조건문 만약 넣으려는 수업시간의 값이 이미 존재한다면,
    // 바꿀것인지 경고문을 띄워라 !!

    // for (
    //   var i = row.firstClassNum;
    //   i < row.firstClassNum + row.continuity;
    //   i++
    // ) {
    //   myMonClassArray.map((row) => forMon.push({ classTime: row.ClassTime }));
    // }

    // console.log('forMon', forMon);
  }, [
    myMonClassArray,
    myTueClassArray,
    myWenClassArray,
    myThuClassArray,
    myFriClassArray,
  ]);

  // 1109 고민 메모장 구현
  useEffect(() => {
    console.log('nowClickClassArray', nowClickClassArray);

    if (nowClickClassArray) {
      if (nowClickClassArray[0]) {
        if (nowClickClassArray[0].day) {
          if (nowClickClassArray[0].day === '월') {
            console.log('1월');
            //            console.log('1월', mondayClassList);
          }
          if (nowClickClassArray[0].day === '화') {
            console.log('1화');
            //          console.log('1화', tuedayClassList);
          }
          if (nowClickClassArray[0].day === '수') {
            console.log('1수');
            //        console.log('1수', wendayClassList);
          }
          if (nowClickClassArray[0].day === '목') {
            console.log('1목');
            //      console.log('1목', thudayClassList);
          }
          if (nowClickClassArray[0].day === '금') {
            console.log('1금');
            //    console.log('1금', fridayClassList);
          }
        }
      }
      if (nowClickClassArray[1]) {
        if (nowClickClassArray[1].day) {
          if (nowClickClassArray[1].day === '월') {
            console.log('2월');
          }
          if (nowClickClassArray[1].day === '화') {
            console.log('2화');
          }
          if (nowClickClassArray[1].day === '수') {
            console.log('2수');
          }
          if (nowClickClassArray[1].day === '목') {
            console.log('2목');
          }
          if (nowClickClassArray[1].day === '금') {
            console.log('2금');
          }
        }
      }
      if (nowClickClassArray[2]) {
        if (nowClickClassArray[2].day) {
          if (nowClickClassArray[2].day === '월') {
            console.log('3월');
          }
          if (nowClickClassArray[2].day === '화') {
            console.log('3화');
          }
          if (nowClickClassArray[2].day === '수') {
            console.log('3수');
          }
          if (nowClickClassArray[2].day === '목') {
            console.log('3목');
          }
          if (nowClickClassArray[2].day === '금') {
            console.log('3금');
          }
        }
      }
    }
  }, [nowClickClassArray]);

  const deleteFn = (wantDeleteID) => {
    var newFinalList = [...finalClassArr];
    setFinalClassArr(
      newFinalList.filter((data) => data.classId !== wantDeleteID)
    );
    var newFinalIDs = [...finalClassIds];
    setFinalClassIds(newFinalIDs.filter((data) => data !== wantDeleteID));
    //
    var newMonList = [...myMonClassArray];
    setMyMonClassArray(
      newMonList.filter((data) => data.classId !== wantDeleteID)
    );
    var newMonIDs = [...myMonClassIds];
    setMyMonClassIds(newMonIDs.filter((data) => data !== wantDeleteID));
    //
    var newTueList = [...myTueClassArray];
    setMyTueClassArray(
      newTueList.filter((data) => data.classId !== wantDeleteID)
    );
    var newTueIDs = [...myTueClassIds];
    setMyTueClassIds(newTueIDs.filter((data) => data !== wantDeleteID));
    //
    var newWendayList = [...myWenClassArray];
    setMyWenClassArray(
      newWendayList.filter((data) => data.classId !== wantDeleteID)
    );
    var newWendayIDs = [...myWenClassIds];
    setMyWenClassIds(newWendayIDs.filter((data) => data !== wantDeleteID));
    //
    var newThudayList = [...myThuClassArray];
    setMyThuClassArray(
      newThudayList.filter((data) => data.classId !== wantDeleteID)
    );
    var newThudayIDs = [...myThuClassIds];
    setMyThuClassIds(newThudayIDs.filter((data) => data !== wantDeleteID));

    //
    var newFridayList = [...myFriClassArray];
    setMyFriClassArray(
      newFridayList.filter((data) => data.classId !== wantDeleteID)
    );
    var newFridayIDs = [...myFriClassIds];
    setMyFriClassIds(newFridayIDs.filter((data) => data !== wantDeleteID));

    //////////////////// 모달창에 쓰이는 array에서도 삭제해야함.
    var newMonClassList = [...mondayClassList];
    setMondayClassList(
      newMonClassList.filter((data) => data.classId !== wantDeleteID)
    );
    var newTueClassList = [...tuedayClassList];
    setTuedayClassList(
      newTueClassList.filter((data) => data.classId !== wantDeleteID)
    );
    var newWenClassList = [...wendayClassList];
    setWendayClassList(
      newWenClassList.filter((data) => data.classId !== wantDeleteID)
    );
    var newThuClassList = [...thudayClassList];
    setThudayClassList(
      newThuClassList.filter((data) => data.classId !== wantDeleteID)
    );
    var newFriClassList = [...fridayClassList];
    setFridayClassList(
      newFriClassList.filter((data) => data.classId !== wantDeleteID)
    );
  };

  // 경고문 "네" 버튼
  const changeOverlapClassListFn = (exist, newAdd) => {
    deleteFn(exist);

    setShowOverlapModal(false);
  };

  // 경고문 "아니요" 버튼
  const existClassListFn = (exist, newAdd) => {
    deleteFn(newAdd);

    setShowOverlapModal(false);
  };

  console.log('월 리스트', mondayClassList);
  console.log('화 리스트', tuedayClassList);
  console.log('수 리스트', wendayClassList);
  console.log('목 리스트', thudayClassList);
  console.log('금 리스트', fridayClassList);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>강의 정보</title>
        </Helmet>
      </HelmetProvider>
      <Header />

      {showOverlapModal && (
        <div className="OverlapModal">
          <h2>
            {`"${existingclass}" 수업을 "${newAddclass}" 수업으로 바꿀래?`}
          </h2>
          <button
            onClick={() => changeOverlapClassListFn(existingclass, newAddclass)}
          >
            네
          </button>
          <button onClick={() => existClassListFn(existingclass, newAddclass)}>
            아니요
          </button>
        </div>
      )}

      {islogin && !showModal && (
        <>
          <div className="MyTimetable__column">
            <div className="MyTimetable__left">
              <Timetable />
            </div>
            <div className="MyTimetable__right">
              <div className="MyTimetable__right__one">
                <ClassList width="610px" height="350px" />
              </div>
              <div className="MyTimetable__right__two">
                <SearchClassList />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default MyTimetable;
