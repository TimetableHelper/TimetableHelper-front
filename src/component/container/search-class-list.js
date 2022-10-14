import '../../styles/component/search-class-list.scss';
import '../../styles/container/gridscss.scss';
import { exServerData } from '../../component/select-class-schedule.js';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { isUseOnMonday, xBtnOnMonday } from '../../atoms';

import {
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
} from '../../atoms';

import addToMonToFriArray from '../../utils/component/addMonToFriArray';

function SearchClassList() {
  const [finalClassArr, setFinalClassArr] = useState([]);
  // 최종 배열. 이걸 요일별로 나눌 예정
  const [finalClassIds, setFinalClassIds] = useState([]);
  // 사용중인 클래스 아이디s

  const [numberOfPresses, setNumberOfPresses] =
    useRecoilState(numberOfPressesAtom);

  //const [myMonClassArray, setMyMonClassArray] = useState([]);
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

  // 중복 체크용 boolean array
  const [isUsedOnMonday, setIsUsedOnMonday] = useRecoilState(isUseOnMonday);

  useEffect(() => {
    addToMonToFriArray({
      finalClassArr,
      myMonClassIds,
      myMonClassArray,
      setMyMonClassArray,
      setMyMonClassIds,
      myTueClassIds,
      myTueClassArray,
      setMyTueClassArray,
      setMyTueClassIds,
      myWenClassIds,
      setMyWenClassArray,
      myThuClassIds,
      myThuClassArray,
      setMyThuClassArray,
      setMyThuClassIds,
      myFriClassIds,
      setMyFriClassArray,
      setMyFriClassIds,
      myWenClassArray,
      setMyWenClassIds,
      myFriClassArray,
      isUsedOnMonday,
      setIsUsedOnMonday,
      xBtnOnMonday,
    });

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
                    // 누른 번호매기기 :: atom값 +1
                    setNumberOfPresses((prev) => prev + 1);

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
                      numberOfPresses: numberOfPresses,
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

                        console.log('newFinalClassArr', newFinalClassArr);
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
