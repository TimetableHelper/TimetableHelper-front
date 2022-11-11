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

  const [existingclass, setExistingClass1] = useState([]);
  const [existingclassName, setExistingClassName] = useState([]);
  const [newAddclass, setNewAddClass] = useState('');
  const [newAddclassName, setNewAddClassName] = useState('');

  // 겹침 모달창 생성
  let forsetExistArr = [...existingclass];

  const viewOverlapModal = (exist, newAdd) => {
    forsetExistArr.push(exist);
    setNewAddClass(newAdd);

    setExistingClass1(forsetExistArr);
    ////////////

    setShowOverlapModal(true);
  };

  console.log('기존', existingclass);
  console.log('클릭', newAddclass);
  console.log('finalClassArr', finalClassArr);

  useEffect(() => {
    let forsetExistNameArr = [...existingclassName];

    if (existingclass.length === 0) {
    } else if (existingclass.length === 1) {
      forsetExistNameArr.push(
        finalClassArr.find((e) => e.classId === existingclass[0]).className
      );
    } else if (existingclass.length === 2) {
      forsetExistNameArr.push(
        finalClassArr.find((e) => e.classId === existingclass[0]).className,
        finalClassArr.find((e) => e.classId === existingclass[1]).className
      );
    } else if (existingclass.length === 3) {
      forsetExistNameArr.push(
        finalClassArr.find((e) => e.classId === existingclass[0]).className,
        finalClassArr.find((e) => e.classId === existingclass[1]).className,
        finalClassArr.find((e) => e.classId === existingclass[2]).className
      );
    } else if (existingclass.length === 4) {
      forsetExistNameArr.push(
        finalClassArr.find((e) => e.classId === existingclass[0]).className,
        finalClassArr.find((e) => e.classId === existingclass[1]).className,
        finalClassArr.find((e) => e.classId === existingclass[2]).className,
        finalClassArr.find((e) => e.classId === existingclass[3]).className
      );
    }

    setExistingClassName(forsetExistNameArr);
  }, [existingclass]);

  console.log('existingclassName 확인', existingclassName);

  // 모달창에서 보여줄 수업명 찾기
  useEffect(() => {
    var NewAddclassName = finalClassArr.find((e) => e.classId === newAddclass);
    if (NewAddclassName) {
      setNewAddClassName(NewAddclassName.className);
    }

    var ExistclassNames = [];
  }, [newAddclass]);

  // 현재 클릭한 수업 데이터 담기
  useEffect(() => {
    // 임시 저장용 array
    var forSetClassArray = [];

    if (nowClickClass && nowClickClass.ClassTime) {
      if (nowClickClass.ClassTime.split(',')[0]) {
        // [0] == 클릭한 수업의 첫번째 요일
        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '월') {
          // 월요일

          if (+nowClickClass.continuity[0] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '월',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [+nowClickClass.ClassTime.split(',')[0].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[0] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '월',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[0] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '월',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 2,
              ],
            });
          }
        }

        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '화') {
          // 화요일

          if (+nowClickClass.continuity[0] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '화',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [+nowClickClass.ClassTime.split(',')[0].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[0] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '화',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[0] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '화',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 2,
              ],
            });
          }
        }
        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '수') {
          // 수요일

          if (+nowClickClass.continuity[0] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '수',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [+nowClickClass.ClassTime.split(',')[0].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[0] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '수',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[0] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '수',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 2,
              ],
            });
          }
        }
        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '목') {
          // 목요일

          if (+nowClickClass.continuity[0] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '목',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [+nowClickClass.ClassTime.split(',')[0].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[0] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '목',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[0] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '목',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 2,
              ],
            });
          }
        }

        if (nowClickClass.ClassTime.split(',')[0].substr(0, 1) === '금') {
          // 금요일

          if (+nowClickClass.continuity[0] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '금',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [+nowClickClass.ClassTime.split(',')[0].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[0] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '금',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[0] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '금',
              firstClassNum: +nowClickClass.ClassTime.split(',')[0].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[0],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[0].substr(1, 1) + 2,
              ],
            });
          }
        }
      }

      if (nowClickClass.ClassTime.split(',')[1]) {
        // [1] == 클릭한 수업의 두번째 요일
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '월') {
          // 월요일

          if (+nowClickClass.continuity[1] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '월',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [+nowClickClass.ClassTime.split(',')[1].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[1] === 2) {
            forSetClassArray.push({
              classId: nowClickClass.classId,
              day: '월',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[1] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '월',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 2,
              ],
            });
          }
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '화') {
          // 화요일

          if (+nowClickClass.continuity[1] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '화',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [+nowClickClass.ClassTime.split(',')[1].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[1] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '화',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[1] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '화',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 2,
              ],
            });
          }
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '수') {
          // 수요일

          if (+nowClickClass.continuity[1] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '수',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [+nowClickClass.ClassTime.split(',')[1].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[1] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '수',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[1] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '수',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 2,
              ],
            });
          }
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '목') {
          // 목요일

          if (+nowClickClass.continuity[1] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '목',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [+nowClickClass.ClassTime.split(',')[1].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[1] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '목',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[1] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '목',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 2,
              ],
            });
          }
        }
        if (nowClickClass.ClassTime.split(',')[1].substr(0, 1) === '금') {
          // 금요일

          if (+nowClickClass.continuity[1] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '금',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [+nowClickClass.ClassTime.split(',')[1].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[1] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '금',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[1] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '금',
              firstClassNum: +nowClickClass.ClassTime.split(',')[1].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[1],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[1].substr(1, 1) + 2,
              ],
            });
          }
        }
      }

      if (nowClickClass.ClassTime.split(',')[2]) {
        // [2] == 클릭한 수업의 세번째 요일
        if (nowClickClass.ClassTime.split(',')[2].substr(0, 1) === '월') {
          // 월요일

          if (+nowClickClass.continuity[2] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '월',
              firstClassNum: +nowClickClass.ClassTime.split(',')[2].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [+nowClickClass.ClassTime.split(',')[2].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[2] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '월',
              firstClassNum: +nowClickClass.ClassTime.split(',')[2].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[2] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '월',
              firstClassNum: +nowClickClass.ClassTime.split(',')[2].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 2,
              ],
            });
          }
        }
        if (nowClickClass.ClassTime.split(',')[2].substr(0, 1) === '화') {
          // 화요일

          if (+nowClickClass.continuity[2] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '화',
              firstClassNum: +nowClickClass.ClassTime.split(',')[2].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [+nowClickClass.ClassTime.split(',')[2].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[2] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '화',
              firstClassNum: +nowClickClass.ClassTime.split(',')[2].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[2] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '화',
              firstClassNum: +nowClickClass.ClassTime.split(',')[2].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 2,
              ],
            });
          }
        }
        if (nowClickClass.ClassTime.split(',')[2].substr(0, 1) === '수') {
          // 수요일

          if (+nowClickClass.continuity[2] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '수',
              firstClassNum: +nowClickClass.ClassTime.split(',')[2].substr(
                1,
                1
              ),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [+nowClickClass.ClassTime.split(',')[2].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[2] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '수',
              firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[2] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '수',
              firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 2,
              ],
            });
          }
        }
        if (nowClickClass.ClassTime.split(',')[2].substr(0, 1) === '목') {
          // 목요일

          if (+nowClickClass.continuity[2] === 1) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '목',
              firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [+nowClickClass.ClassTime.split(',')[2].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[2] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '목',
              firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[2] === 3) {
            forSetClassArray.push({
              classId: nowClickClass.classId,
              day: '목',
              firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 2,
              ],
            });
          }
        }
        if (nowClickClass.ClassTime.split(',')[2].substr(0, 1) === '금') {
          // 금요일

          if (+nowClickClass.continuity[2] === 1) {
            forSetClassArray.push({
              classId: nowClickClass.classId,
              day: '금',
              firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [+nowClickClass.ClassTime.split(',')[2].substr(1, 1)],
            });
          }
          if (+nowClickClass.continuity[2] === 2) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '금',
              firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 1,
              ],
            });
          }
          if (+nowClickClass.continuity[2] === 3) {
            forSetClassArray.push({
              classId: +nowClickClass.classId,
              day: '금',
              firstClassNum: nowClickClass.ClassTime.split(',')[2].substr(1, 1),
              className: nowClickClass.className,
              continuity: +nowClickClass.continuity[2],
              totalClass: [
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1),
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 1,
                +nowClickClass.ClassTime.split(',')[2].substr(1, 1) + 2,
              ],
            });
          }
        }
      }
    }

    // 기존 데이터 초기화
    setNowClickClassArray([]);
    // 클릭한 수업의 데이터를 담고,
    setNowClickClassArray(forSetClassArray);
    // 담은 이후에 초기화
    forSetClassArray = [];
  }, [nowClickClass]);

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
    //    deleteFn(exist);

    setExistingClass1([]);
    setExistingClassName([]);
    setShowOverlapModal(false);
  };

  // 경고문 "아니요" 버튼
  const existClassListFn = (exist, newAdd) => {
    deleteFn(newAdd);

    setExistingClass1([]);
    setExistingClassName([]);
    setShowOverlapModal(false);
  };

  console.log('nowClickClassArray', nowClickClassArray);

  const [stop, setStop] = useState(false);

  const ifNotZeroReturnTrue = (now, dayArr, i, nowI) => {
    return (
      now[nowI].totalClass.filter((x) => dayArr[i].totalClass.includes(x))
        .length !== 0
    );
  };

  // 1109~ 1111 고민 메모장 구현
  // totalClass 중복체크 후에 모달창 띄우기
  useEffect(() => {
    if (nowClickClassArray[0] && !stop) {
      if (nowClickClassArray[0].day) {
        if (nowClickClassArray[0].day === '월' && !stop) {
          console.log('1월');

          for (var i = 0; i < myMonClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myMonClassArray, i, 0)
            ) {
              viewOverlapModal(
                myMonClassArray[i].classId,
                nowClickClassArray[0].classId
              );

              setStop(true);
            }
          }
        }
        if (nowClickClassArray[0].day === '화' && !stop) {
          console.log('1화');

          for (var i = 0; i < myTueClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myTueClassArray, i, 0)
            ) {
              viewOverlapModal(
                myTueClassArray[i].classId,
                nowClickClassArray[0].classId
              );

              setStop(true);
            }
          }
        }
        if (nowClickClassArray[0].day === '수' && !stop) {
          console.log('1수');

          for (var i = 0; i < myWenClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myWenClassArray, i, 0)
            ) {
              viewOverlapModal(
                myWenClassArray[i].classId,
                nowClickClassArray[0].classId
              );

              setStop(true);
            }
          }

          //        console.log('1수', wendayClassList);
        }
        if (nowClickClassArray[0].day === '목' && !stop) {
          console.log('1목');

          for (var i = 0; i < myThuClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myThuClassArray, i, 0)
            ) {
              viewOverlapModal(
                myThuClassArray[i].classId,
                nowClickClassArray[0].classId
              );

              setStop(true);
            }
          }

          //      console.log('1목', thudayClassList);
        }
        if (nowClickClassArray[0].day === '금' && !stop) {
          console.log('1금');

          for (var i = 0; i < myFriClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myFriClassArray, i, 0)
            ) {
              viewOverlapModal(
                myFriClassArray[i].classId,
                nowClickClassArray[0].classId
              );

              setStop(true);
            }
          }

          //    console.log('1금', fridayClassList);
        }
      }
      setStop(false);
    }
    if (nowClickClassArray[1] && !stop) {
      if (nowClickClassArray[1].day) {
        if (nowClickClassArray[1].day === '월' && !stop) {
          console.log('2월');

          for (var i = 0; i < myMonClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myMonClassArray, i, 1)
            ) {
              console.log(
                'i',
                i,
                '(기존) : ',
                myMonClassArray[i].className,
                myMonClassArray[i].classId,
                '(클릭) : ',
                nowClickClassArray[1].classId,
                nowClickClassArray[1].className
              );

              viewOverlapModal(
                myMonClassArray[i].className,
                nowClickClassArray[1].classId
              );

              setStop(true);
            }
          }
        }
        if (nowClickClassArray[1].day === '화' && !stop) {
          console.log('2화');

          for (var i = 0; i < myTueClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myTueClassArray, i, 1)
            ) {
              console.log(
                'i',
                i,
                '(기존) : ',
                myTueClassArray[i].classId,
                myTueClassArray[i].className,
                '(클릭) : ',
                nowClickClassArray[1].classId,
                nowClickClassArray[1].className
              );

              viewOverlapModal(
                myTueClassArray[i].classId,
                nowClickClassArray[1].classId
              );

              setStop(true);
            }
          }
        }
        if (nowClickClassArray[1].day === '수' && !stop) {
          console.log('2수');

          // 찐
          for (var i = 0; i < myWenClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myWenClassArray, i, 1)
            ) {
              viewOverlapModal(
                myWenClassArray[i].classId,
                nowClickClassArray[1].classId
              );

              setStop(true);
            }
          }
        }
        if (nowClickClassArray[1].day === '목' && !stop) {
          console.log('2목');

          for (var i = 0; i < myThuClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myThuClassArray, i, 1)
            ) {
              console.log(
                'i',
                i,
                '(기존) : ',
                myThuClassArray[i].classId,
                myThuClassArray[i].className,
                '(클릭) : ',
                nowClickClassArray[1].classId,
                nowClickClassArray[1].className
              );

              viewOverlapModal(
                myThuClassArray[i].classId,
                nowClickClassArray[1].classId
              );

              setStop(true);
            }
          }
        }
        if (nowClickClassArray[1].day === '금' && !stop) {
          console.log('2금');

          for (var i = 0; i < myFriClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myFriClassArray, i, 1)
            ) {
              console.log(
                'i',
                i,
                '(기존) : ',
                myFriClassArray[i].classId,
                myFriClassArray[i].className,
                '(클릭) : ',
                nowClickClassArray[1].classId,
                nowClickClassArray[1].className
              );

              viewOverlapModal(
                myFriClassArray[i].classId,
                nowClickClassArray[1].classId
              );

              setStop(true);
            }
          }
        }
        setStop(false);
      }
    }
    if (nowClickClassArray[2] && !stop) {
      if (nowClickClassArray[2].day) {
        if (nowClickClassArray[2].day === '월' && !stop) {
          console.log('3월');

          for (var i = 0; i < myMonClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myMonClassArray, i, 2)
            ) {
              console.log(
                'i',
                i,
                '(기존) : ',
                myMonClassArray[i].classId,
                myMonClassArray[i].className,
                '(클릭) : ',
                nowClickClassArray[2].classId,
                nowClickClassArray[2].className
              );

              viewOverlapModal(
                myMonClassArray[i].classId,
                nowClickClassArray[2].classId
              );

              setStop(true);
            }
          }
        }
        if (nowClickClassArray[2].day === '화' && !stop) {
          console.log('3화');

          for (var i = 0; i < myTueClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myTueClassArray, i, 2)
            ) {
              console.log(
                'i',
                i,
                '(기존) : ',
                myTueClassArray[i].classId,
                myTueClassArray[i].className,
                '(클릭) : ',
                nowClickClassArray[2].classId,
                nowClickClassArray[2].className
              );

              viewOverlapModal(
                myTueClassArray[i].classId,
                nowClickClassArray[2].classId
              );

              setStop(true);
            }
          }
        }
        if (nowClickClassArray[2].day === '수' && !stop) {
          console.log('3수');

          for (var i = 0; i < myWenClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myWenClassArray, i, 2)
            ) {
              console.log(
                'i',
                i,
                '(기존) : ',
                myWenClassArray[i].classId,
                myWenClassArray[i].className,
                '(클릭) : ',
                nowClickClassArray[2].classId,
                nowClickClassArray[2].className
              );

              viewOverlapModal(
                myWenClassArray[i].classId,
                nowClickClassArray[2].classId
              );

              setStop(true);
            }
          }
        }
        if (nowClickClassArray[2].day === '목' && !stop) {
          console.log('3목');

          for (var i = 0; i < myThuClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myThuClassArray, i, 2)
            ) {
              console.log(
                'i',
                i,
                '(기존) : ',
                myThuClassArray[i].classId,
                myThuClassArray[i].className,
                '(클릭) : ',
                nowClickClassArray[2].classId,
                nowClickClassArray[2].className
              );

              viewOverlapModal(
                myThuClassArray[i].classId,
                nowClickClassArray[2].classId
              );

              setStop(true);
            }
          }
        }
        if (nowClickClassArray[2].day === '금' && !stop) {
          console.log('3금');

          for (var i = 0; i < myFriClassArray.length - 1; i++) {
            if (
              ifNotZeroReturnTrue(nowClickClassArray, myFriClassArray, i, 2)
            ) {
              console.log(
                'i',
                i,
                '(기존) : ',
                myFriClassArray[i].classId,
                myFriClassArray[i].className,
                '(클릭) : ',
                nowClickClassArray[2].classId,
                nowClickClassArray[2].className
              );

              viewOverlapModal(
                myFriClassArray[i].classId,
                nowClickClassArray[2].classId
              );

              setStop(true);
            }
          }
        }
        setStop(false);
      }
    }

    setNowClickClassArray([]);
    //    setStop(false);
  }, [
    myMonClassArray,
    myTueClassArray,
    myWenClassArray,
    myThuClassArray,
    myFriClassArray,
  ]);

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
            {`"${existingclassName}" 수업을 "${newAddclassName}" 수업으로 바꿀래?`}
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
