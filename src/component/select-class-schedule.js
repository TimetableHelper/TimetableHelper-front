import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import '../styles/container/gridscss.scss';
import '../styles/container/mainVy.scss';
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
} from '../atoms';
import classnames from 'classnames';

import addToMonToFriArray from '../utils/component/addMonToFriArray';

export const exServerData = [
  {
    classId: 1,
    className: '영어',
    Professor: 'Bora Kim',
    ClassTime: '월12,목1',
    lectureRoom: 'R426',
    Classification: '교양필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 2,
    className: '창의적테크노프레너십설계(캡스톤디자인)(*)',
    Professor: '엄태식, 최수형, 김범상',
    ClassTime: '수91011',
    lectureRoom: 'Q403',
    Classification: '전공필수',
    Grades: 3,
    continuity: 3,
  },
  {
    classId: 3,
    className: '논리적사고와글쓰기(인문)',
    Professor: '이정환',
    ClassTime: '화34,목34',
    lectureRoom: 'C720',
    Classification: '교양필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 4,
    className: '논리적사고와글쓰기(인문)',
    Professor: '홍인숙',
    ClassTime: '월34,수34',
    lectureRoom: 'C717',
    Classification: '교양필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 5,
    className: '논리적사고와글쓰기(인문)',
    Professor: '구봉곤',
    ClassTime: '화78,목78',
    lectureRoom: 'C718',
    Classification: '교양필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 6,
    className: '논리적사고와글쓰기(인문)',
    Professor: '김기란',
    ClassTime: '수78,금78',
    lectureRoom: 'C709',
    Classification: '교양필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 7,
    className: '논리적사고와글쓰기(인문)',
    Professor: '유정월',
    ClassTime: '화78,목78',
    lectureRoom: 'C715',
    Classification: '교양필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 8,
    className: '소프트웨어공학',
    Professor: '김한규',
    ClassTime: '월3,화3,수3',
    lectureRoom: 'T503,T606',
    Classification: '전공필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 9,
    className: '소프트웨어공학',
    Professor: '김은삼',
    ClassTime: '월8,화8,목8',
    lectureRoom: 'T502',
    Classification: '전공필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 10,
    className: '1목요일시작1',
    Professor: '1목요일1',
    ClassTime: '목8910',
    lectureRoom: 'T502',
    Classification: '전공필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 11,
    className: '2목요일시작2',
    Professor: '2목요일2',
    ClassTime: '목34,화34',
    lectureRoom: 'T502',
    Classification: '전공필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 12,
    className: '2금요일시작2',
    Professor: '2금요일2',
    ClassTime: '금456',
    lectureRoom: 'T502',
    Classification: '전공필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 13,
    className: '2금요일시작2',
    Professor: '2금요일2',
    ClassTime: '금23',
    lectureRoom: 'T502',
    Classification: '전공필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 14,
    className: '1화수1',
    Professor: '1화수1',
    ClassTime: '화12,수23',
    lectureRoom: 'T502',
    Classification: '전공필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 15,
    className: '1목금1',
    Professor: '1목금1',
    ClassTime: '목12,금23',
    lectureRoom: 'T502',
    Classification: '전공필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 16,
    className: '2목금2',
    Professor: '2목금2',
    ClassTime: '목12,금23',
    lectureRoom: 'T502',
    Classification: '전공필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 17,
    className: '영어22',
    Professor: 'Bora Kim',
    ClassTime: '월234,목12',
    lectureRoom: 'R426',
    Classification: '교양필수',
    Grades: 3,
    continuity: 2,
  },
  {
    classId: 18,
    className: '영어333',
    Professor: 'Bora Kim',
    ClassTime: '월234,목1',
    lectureRoom: 'R426',
    Classification: '교양필수',
    Grades: 3,
    continuity: 2,
  },
];

export default function ClassList({ width, height, position, left, top }) {
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

  var newheight = Number(height.slice(0, 3)) - 20 + 'px';
  return (
    <div
      className="mainVy__grid m-auto"
      style={{
        width: width,
        height: height,
        position: position,
        left: left,
        top: top,
      }}
    >
      <div className="grid__grid-header" style={{ width: width }}>
        <span>과목명</span>
        <span>담당교수</span>
        <span>수업시간</span>
        <span>강의실</span>
        <span>수강구분</span>
        <span>학점</span>
      </div>
      <div className="grid__contents" style={{ height: newheight }}>
        {/*<ShowClassList classArray={exServerData} /> */}
        {exServerData.map((data) => {
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
  );
}
