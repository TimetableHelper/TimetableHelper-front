import '../../styles/component/search-class-list.scss';
import '../../styles/container/gridscss.scss';
import { exServerData } from '../../component/select-class-schedule.js';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';

function SearchClassList() {
  const addToMonToFriArray = () => {
    for (var i = 0; i < finalClassArr.length; i++) {
      //  console.log('전체', finalClassArr [i].ClassTime);
      if (finalClassArr[i].ClassTime) {
        // 위 if문은 유효성 검사 (별 의미 x)
        if (finalClassArr[i].ClassTime.split(',')[0]) {
          // 수업 요일이 하루 이상이라면 ...
          // 월,화,수,목,금 배열에 넣기 -->
          // 아래 if문을 하루이상, 2일이상, 3일이상 ==> 모든 if에서 반복.
          if (finalClassArr[i].ClassTime.split(',')[0].substr(0, 1)) {
            // Output==> 월 , 화 , 수 , 목 , 금
            if (
              // 수업 요일의 첫째날이 월요일이라면  && 수업데이터가 들어있지 않다면(중복 체크)
              finalClassArr[i].ClassTime.split(',')[0].substr(0, 1) === '월' &&
              myMonClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 월요일 배열에 추가.
              var addMon0data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
              };
              var newMon0arr = [...myMonClassArray, addMon0data];
              setMyMonClassArray(newMon0arr);
              var newMon0ClassIds = [
                ...myMonClassIds,
                finalClassArr[i].classId,
              ];
              setMyMonClassIds(newMon0ClassIds);
            }
            if (
              // 수업 요일의 첫째날이 화요일이라면
              finalClassArr[i].ClassTime.split(',')[0].substr(0, 1) === '화' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myTueClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 화요일 배열에 추가.
              var addTue0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
              };
              var newTue0arr = [...myTueClassArray, addTue0Arr];
              setMyTueClassArray(newTue0arr);
              var newTue0ClassIds = [
                ...myTueClassIds,
                finalClassArr[i].classId,
              ];
              setMyTueClassIds(newTue0ClassIds);
            }
            if (
              // 수업 요일의 첫째날이 수요일이라면
              finalClassArr[i].ClassTime.split(',')[0].substr(0, 1) === '수' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myWenClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 수요일 배열에 추가.
              var addWen0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
              };
              var newWen0arr = [...myWenClassArray, addWen0Arr];
              setMyWenClassArray(newWen0arr);
              var newWen0ClassIds = [
                ...myWenClassIds,
                finalClassArr[i].classId,
              ];
              setMyWenClassIds(newWen0ClassIds);
            }
            if (
              // 수업 요일의 첫째날이 목요일이라면
              finalClassArr[i].ClassTime.split(',')[0].substr(0, 1) === '목' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myThuClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.
              var addThu0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
              };
              var newThu0arr = [...myThuClassArray, addThu0Arr];
              setMyThuClassArray(newThu0arr);
              var newThu0ClassIds = [
                ...myThuClassIds,
                finalClassArr[i].classId,
              ];
              setMyThuClassIds(newThu0ClassIds);
            }
            if (
              // 수업 요일의 첫째날이 금요일이라면
              finalClassArr[i].ClassTime.split(',')[0].substr(0, 1) === '금' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myFriClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.
              var addFri0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
              };
              var newFri0arr = [...myFriClassArray, addFri0Arr];
              setMyFriClassArray(newFri0arr);
              var newFri0ClassIds = [
                ...myFriClassIds,
                finalClassArr[i].classId,
              ];
              setMyFriClassIds(newFri0ClassIds);
            }
          }
        }
        if (finalClassArr[i].ClassTime.split(',')[1]) {
          // 수업 요일이 2일이상이라면 ...
          // 월,화,수,목,금 배열에 넣기 -->
          // 아래 if문을 하루이상, 2일이상, 3일이상 ==> 모든 if에서 반복.
          if (finalClassArr[i].ClassTime.split(',')[1].substr(0, 1)) {
            // Output==> 월 , 화 , 수 , 목 , 금
            // 아래 함수를5번 반복
            if (
              // 수업 요일의 둘째날이 월요일이라면
              finalClassArr[i].ClassTime.split(',')[1].substr(0, 1) === '월' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myMonClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 월요일 배열에 추가.
              var addMon1data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
              };
              var newMon1arr = [...myMonClassArray, addMon1data];
              setMyMonClassArray(newMon1arr);
              var newMon1ClassIds = [
                ...myMonClassIds,
                finalClassArr[i].classId,
              ];
              setMyMonClassIds(newMon1ClassIds);
            }
            if (
              // 수업 요일의 둘째날이 화요일이라면
              finalClassArr[i].ClassTime.split(',')[1].substr(0, 1) === '화' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myTueClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 화요일 배열에 추가.
              var addTue1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
              };
              var newTue1arr = [...myTueClassArray, addTue1Arr];
              setMyTueClassArray(newTue1arr);
              var newTue1ClassIds = [
                ...myTueClassIds,
                finalClassArr[i].classId,
              ];
              setMyTueClassIds(newTue1ClassIds);
            }
            if (
              // 수업 요일의 둘째날이 수요일이라면
              finalClassArr[i].ClassTime.split(',')[1].substr(0, 1) === '수' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myWenClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 수요일 배열에 추가.
              var addWen1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
              };
              var newWen1arr = [...myWenClassArray, addWen1Arr];
              setMyWenClassArray(newWen1arr);
              var newWen1ClassIds = [
                ...myWenClassIds,
                finalClassArr[i].classId,
              ];
              setMyWenClassIds(newWen1ClassIds);
            }
            if (
              // 수업 요일의 둘째날이 목요일이라면
              finalClassArr[i].ClassTime.split(',')[1].substr(0, 1) === '목' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myThuClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.
              var addThu1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
              };
              var newThu1arr = [...myThuClassArray, addThu1Arr];
              setMyThuClassArray(newThu1arr);
              var newThu1ClassIds = [
                ...myThuClassIds,
                finalClassArr[i].classId,
              ];
              setMyThuClassIds(newThu1ClassIds);
            }
            if (
              // 수업 요일의 둘째날이 금요일이라면
              finalClassArr[i].ClassTime.split(',')[1].substr(0, 1) === '금' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myFriClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.
              var addFri1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
              };
              var newFri1arr = [...myFriClassArray, addFri1Arr];
              setMyFriClassArray(newFri1arr);
              var newFri1ClassIds = [
                ...myFriClassIds,
                finalClassArr[i].classId,
              ];
              setMyFriClassIds(newFri1ClassIds);
            }
          }
        }
        if (finalClassArr[i].ClassTime.split(',')[2]) {
          // 수업 요일이 3일이라면 ...
          // 월,화,수,목,금 배열에 넣기 -->
          // 아래 if문을 하루이상, 2일이상, 3일이상 ==> 모든 if에서 반복.
          if (finalClassArr[i].ClassTime.split(',')[2].substr(0, 1)) {
            // Output==> 월 , 화 , 수 , 목 , 금
            // 아래 함수를5번 반복
            if (
              // 수업 요일의 첫째날이 월요일이라면
              finalClassArr[i].ClassTime.split(',')[2].substr(0, 1) === '월' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myMonClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 월요일 배열에 추가.
              var addMon2data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
              };
              var newMon2arr = [...myMonClassArray, addMon2data];
              setMyMonClassArray(newMon2arr);
              var newMon2ClassIds = [
                ...myMonClassIds,
                finalClassArr[i].classId,
              ];
              setMyMonClassIds(newMon2ClassIds);
            }
            if (
              // 수업 요일의 첫째날이 화요일이라면
              finalClassArr[i].ClassTime.split(',')[2].substr(0, 1) === '화' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myTueClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 화요일 배열에 추가.
              var addTue2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
              };
              var newTue2arr = [...myTueClassArray, addTue2Arr];
              setMyTueClassArray(newTue2arr);
              var newTue2ClassIds = [
                ...myTueClassIds,
                finalClassArr[i].classId,
              ];
              setMyTueClassIds(newTue2ClassIds);
            }
            if (
              // 수업 요일의 첫째날이 수요일이라면
              finalClassArr[i].ClassTime.split(',')[2].substr(0, 1) === '수' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myWenClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 수요일 배열에 추가.
              var addWen2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
              };
              var newWen2arr = [...myWenClassArray, addWen2Arr];
              setMyWenClassArray(newWen2arr);
              var newWen2ClassIds = [
                ...myWenClassIds,
                finalClassArr[i].classId,
              ];
              setMyWenClassIds(newWen2ClassIds);
            }
            if (
              // 수업 요일의 첫째날이 목요일이라면
              finalClassArr[i].ClassTime.split(',')[2].substr(0, 1) === '목' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myThuClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.
              var addThu2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
              };
              var newThu2arr = [...myThuClassArray, addThu2Arr];
              setMyThuClassArray(newThu2arr);
              var newThu2ClassIds = [
                ...myThuClassIds,
                finalClassArr[i].classId,
              ];
              setMyThuClassIds(newThu2ClassIds);
            }
            if (
              // 수업 요일의 첫째날이 금요일이라면
              finalClassArr[i].ClassTime.split(',')[2].substr(0, 1) === '금' &&
              // && 수업데이터가 들어있지 않다면(중복 체크)
              myFriClassIds.indexOf(finalClassArr[i].classId) === -1
            ) {
              // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.
              var addFri2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity,
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
              };
              var newFri2arr = [...myFriClassArray, addFri2Arr];
              setMyFriClassArray(newFri2arr);
              var newFri2ClassIds = [
                ...myFriClassIds,
                finalClassArr[i].classId,
              ];
              setMyFriClassIds(newFri2ClassIds);
            }
          }
        }
      }
    }
  };
  const [finalClassArr, setFinalClassArr] = useState([]);
  // 최종 배열. 이걸 요일별로 나눌 예정
  const [finalClassIds, setFinalClassIds] = useState([]);
  // 사용중인 클래스 아이디s

  const [myMonClassArray, setMyMonClassArray] = useState([]);
  const [myMonClassIds, setMyMonClassIds] = useState([]);

  const [myTueClassArray, setMyTueClassArray] = useState([]);
  const [myTueClassIds, setMyTueClassIds] = useState([]);
  const [myWenClassArray, setMyWenClassArray] = useState([]);
  const [myWenClassIds, setMyWenClassIds] = useState([]);
  const [myThuClassArray, setMyThuClassArray] = useState([]);
  const [myThuClassIds, setMyThuClassIds] = useState([]);
  const [myFriClassArray, setMyFriClassArray] = useState([]);
  const [myFriClassIds, setMyFriClassIds] = useState([]);

  useEffect(() => {
    addToMonToFriArray();

    // finalClassArr의 ClassId들을 중복없이 finalClassIds 에 담기.
    for (var m = 0; m < finalClassArr.length; m++) {
      if (
        finalClassArr[m].classId &&
        finalClassIds.indexOf(finalClassArr[m].classId) === -1
      ) {
        var newfinalClassIds = [...finalClassIds, finalClassArr[m].classId];
        setFinalClassIds(newfinalClassIds);
      }
    }
  }, [finalClassArr]);

  /* 
  useEffect(() => {
    var newMonArr = [...myMonClassArray];
    newMonArr.sort((a, b) => a.ClassTime.substr(1) - b.ClassTime.substr(1));
    setMyMonClassArray(newMonArr);
    var newTueArr = [...myTueClassArray];
    newTueArr.sort((a, b) => a.ClassTime.substr(1) - b.ClassTime.substr(1));
    setMyTueClassArray(newTueArr);
    var newWenArr = [...myWenClassArray];
    newWenArr.sort((a, b) => a.ClassTime.substr(1) - b.ClassTime.substr(1));
    setMyWenClassArray(newWenArr);
    var newThuArr = [...myThuClassArray];
    newThuArr.sort((a, b) => a.ClassTime.substr(1) - b.ClassTime.substr(1));
    setMyThuClassArray(newThuArr);
    var newFriArr = [...myFriClassArray];
    newFriArr.sort((a, b) => a.ClassTime.substr(1) - b.ClassTime.substr(1));
    setMyFriClassArray(newFriArr);
  }, [
    myMonClassIds,
    myTueClassIds,
    myWenClassIds,
    myThuClassIds,
    myFriClassIds,
  ]); */

  console.log('월', myMonClassArray);
  console.log('화', myTueClassArray);
  console.log('수', myWenClassArray);
  console.log('목', myThuClassArray);
  console.log('금', myFriClassArray);
  return (
    <>
      <div className="SearchClassList__column">
        <div className="SearchClassList__search-input">
          <select>
            <option>선택</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input type="text" placeholder="과목명" />
          <BsSearch />
        </div>
        <div className="SearchClassList__contents">
          <div className="SearchClassList__recommend-keyword">
            <button className="SearchClassList__recommend-keyword-btn">
              가벼운 타과 전공
            </button>
            <button className="SearchClassList__recommend-keyword-btn">
              건강을 위한
            </button>
            <button className="SearchClassList__recommend-keyword-btn">
              토론이 많은
            </button>
            <button className="SearchClassList__recommend-keyword-btn">
              실습 위주의
            </button>
            <button className="SearchClassList__recommend-keyword-btn">
              다양한 지식을 쌓는
            </button>
          </div>
          <div
            className="grid__contents"
            style={{ height: '180px', paddingLeft: '0' }}
          >
            {exServerData.map((data) => {
              return (
                <div
                  className="grid__contents__columns"
                  key={data.classId}
                  onClick={() => {
                    // 클릭한 수업의 data 복사.
                    var clickedClass = {
                      classId: data.classId,
                      className: data.className,
                      Professor: data.Professor,
                      ClassTime: data.ClassTime,
                      lectureRoom: data.lectureRoom,
                      Classification: data.Classification,
                      Grades: data.Grades,
                      continuity: data.continuity,
                    };
                    if (finalClassArr.length === 0) {
                      // finalClassArr가 비었다면,( = 첫클릭, 중복체크 필요x)
                      // 바로 클릭한 수업을 arr2에넣기 , classId를 arr4에 넣기
                      let newFinalClassArr = [...finalClassArr, clickedClass];
                      setFinalClassArr(newFinalClassArr);
                      let newfinalClassIds = [...finalClassIds, data.classId];
                      setFinalClassIds(newfinalClassIds);
                    } else {
                      //== finalClassArr 가 비어있지 않다면
                      if (finalClassIds.indexOf(data.classId) === -1) {
                        let newFinalClassArr = [...finalClassArr, clickedClass];
                        setFinalClassArr(newFinalClassArr);
                        console.log('finalClassIds', finalClassIds);
                      }

                      // 클릭한 수업의 아이디(data.classId)가
                      // finalClassArr[i].classid에 없다면 ..
                    }
                  }}
                >
                  <span className="grid__contents__className">
                    {data.className}
                  </span>
                  <span className="grid__contents__Professor">
                    {data.Professor}
                  </span>
                  <span className="grid__contents__ClassTime">
                    {data.ClassTime}
                  </span>
                  <span>{data.lectureRoom}</span>
                  <span>{data.Classification}</span>
                  <span>{data.Grades}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchClassList;
