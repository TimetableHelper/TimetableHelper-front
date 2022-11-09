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
} from '../atoms';

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

  //////// 수업 겹침 경고문 코드

  const [finalClassArr, setFinalClassArr] = useRecoilState(finalClassArray);
  const [myMonClassArray, setMyMonClassArray] = useRecoilState(MonClassArray);
  console.log('finalClassArr', finalClassArr);
  // 마지막으로 클릭한 수업의 데이터
  const [nowClickClass, setNowClickClass] = useRecoilState(nowClickClassData);
  const [nowClickClassArray, setNowClickClassArray] = useRecoilState(
    nowClickClassDataArray
  );

  console.log('nowClickClass', nowClickClass);
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
            day: '수',
            firstClassNum: nowClickClass.ClassTime.split(',')[0].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[0],
          });
          console.log('nowClickClassArray수0', [
            ...nowClickClassArray,
            {
              day: '수',
              firstClassNum: nowClickClass.ClassTime.split(',')[0].substr(1, 1),
              className: nowClickClass.className,
            },
          ]);
        }
        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '목') {
          // 목요일
          console.log('목');

          forSetClassArray.push({
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
            day: '목',
            firstClassNum: nowClickClass.ClassTime.split(',')[1].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[1],
          });
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '금') {
          // 금요일
          console.log('금2');
          console.log('금2', nowClickClassArray);
          console.log('금2', nowClickClassArray);

          forSetClassArray.push({
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
            day: '수',
            firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[2],
          });
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '목') {
          // 목요일
          console.log('목3');

          forSetClassArray.push({
            day: '목',
            firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
            className: nowClickClass.className,
            continuity: nowClickClass.continuity[2],
          });
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '금') {
          // 금요일
          console.log('금3');

          forSetClassArray.push({
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

  console.log('nowClickClassArray', nowClickClassArray);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>강의 정보</title>
        </Helmet>
      </HelmetProvider>
      <Header />

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
