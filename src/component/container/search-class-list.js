import '../../styles/component/search-class-list.scss';
import '../../styles/container/gridscss.scss';
import { exServerData } from '../../component/select-class-schedule.js';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import classnames from 'classnames';

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
} from '../../atoms';

import addToMonToFriArray from '../../utils/component/addMonToFriArray';

function SearchClassList({ ekarl }) {
  // 마지막으로 클릭한 수업의 데이터
  const [nowClickClass, setNowClickClass] = useRecoilState(nowClickClassData);

  const [finalClassArr, setFinalClassArr] = useRecoilState(finalClassArray);
  // 최종 배열. 이걸 요일별로 나눌 예정

  const [finalClassIds, setFinalClassIds] = useRecoilState(finalClassIdsAtom);
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

  /*
  // 중복 체크용 boolean array
  const [isUsedOnMonday, setIsUsedOnMonday] = useRecoilState(isUseOnMonday);
  */

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
  console.log('월', myMonClassArray);
  console.log('화', myTueClassArray);
  console.log('수', myWenClassArray);
  console.log('목', myThuClassArray);
  console.log('금', myFriClassArray);
*/

  const [BtnKeyWords, setBtnKeyWords] = useState([
    { keywords: '가벼운 타과 전공', focus: false, key: 1 },
    { keywords: '건강을 위한', focus: false, key: 2 },
    { keywords: '토론이 많은', focus: false, key: 3 },
    { keywords: '실습 위주의', focus: false, key: 4 },
    { keywords: '다양한 지식을 쌓는', focus: false, key: 5 },
  ]);

  // keyword클릭시 수업 정렬
  const [printClassData, setPrintClassData] = useState([]);
  useEffect(() => {
    var serverdata = [...exServerData];
    setPrintClassData(serverdata);
  }, []);

  const buttonClick = (num, keywords, BtnKeyWordsBoolean) => {
    // 버튼 focus 초기화
    var resetKeywordBoolean = [...BtnKeyWords];
    for (var i = 0; i < BtnKeyWords.length; i++) {
      resetKeywordBoolean[i].focus = false;
      setBtnKeyWords(resetKeywordBoolean);
    }

    // 클릭한 버튼 색 넣기
    BtnKeyWords[num].focus = !BtnKeyWords[num].focus;

    var newBtns = [...BtnKeyWords];
    setBtnKeyWords(newBtns);

    // 클릭한 키워드 수업으로 변경
    var copy = [...exServerData];
    if (keywords && !BtnKeyWordsBoolean) {
      BtnKeyWords[num].focus = true;

      var newOnBtns = [...BtnKeyWords];
      setBtnKeyWords(newOnBtns);
      setPrintClassData(
        copy.filter((data) => data.keyWords.indexOf(keywords) !== -1)
      );
    }
    // 2번 클릭시
    if (BtnKeyWordsBoolean) {
      BtnKeyWords[num].focus = false;
      var newOffBtns = [...BtnKeyWords];
      setBtnKeyWords(newOffBtns);

      var resetData = [...exServerData];
      setPrintClassData(resetData);
    }
  };

  // 마지막 클릭한 수업 데이터
  const [nowClickClassArray, setNowClickClassArray] = useRecoilState(
    nowClickClassDataArray
  );

  return (
    <>
      <div className="SearchClassList__column">
        <div className="SearchClassList__search-input">
          <select defaultValue={`DEFAULT`}>
            <option value="DEFAULT" disabled>
              선택
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input type="text" placeholder="과목명" />
          <BsSearch />
        </div>
        <div className="SearchClassList__contents">
          <div className="SearchClassList__recommend-keyword">
            {BtnKeyWords.map((keywords) => {
              return (
                <button
                  className={classnames(
                    'SearchClassList__recommend-keyword-btn',
                    {
                      'SearchClassList__recommend-keyword-btn-active':
                        keywords.focus,
                    }
                  )}
                  key={keywords.key}
                  onClick={() =>
                    buttonClick(
                      keywords.key - 1,
                      keywords.keywords,
                      keywords.focus
                    )
                  }
                >
                  {keywords.keywords}
                </button>
              );
            })}
          </div>
          <div
            className="grid__contents"
            style={{ height: '258px', paddingLeft: '0' }}
          >
            {printClassData.map((data) => {
              return (
                <div
                  className={classnames('grid__contents__columns', {
                    'grid__contents__columns-active':
                      finalClassIds.indexOf(data.classId) !== -1,
                  })}
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

                    if (finalClassIds.indexOf(data.classId) !== -1) {
                      setNowClickClass(clickedClass);
                      ekarl();
                    }

                    if (finalClassArr.length === 0) {
                      // finalClassArr가 비었다면,( = 첫클릭, 중복체크 필요x)
                      // 바로 클릭한 수업을 arr2에넣기 , classId를 arr4에 넣기
                      let newFinalClassArr = [...finalClassArr, clickedClass];
                      setFinalClassArr(newFinalClassArr);
                      let newfinalClassIds = [...finalClassIds, data.classId];
                      setFinalClassIds(newfinalClassIds);
                    } else {
                      //== finalClassArr 가 비어있지 않다면
                      // 클릭한 수업의 classId가 finalClassIds에 있는지 확인 == 있다면 이미 들어있는 수업
                      if (finalClassIds.indexOf(data.classId) === -1) {
                        let newFinalClassArr = [...finalClassArr, clickedClass];
                        setFinalClassArr(newFinalClassArr);
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
