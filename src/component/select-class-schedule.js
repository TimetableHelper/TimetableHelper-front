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
  nowClickClassData,
  nowClickClassDataArray,
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
    continuity: [2, 1],
    keyWords: ['건강을 위한', '실습 위주의'],
  },
  {
    classId: 2,
    className: '창의적테크노프레너십설계(캡스톤디자인)(*)',
    Professor: '엄태식, 최수형, 김범상',
    ClassTime: '수456',
    lectureRoom: 'Q403',
    Classification: '전공필수',
    Grades: 3,
    continuity: [3],
    keyWords: ['건강을 위한', '토론이 많은'],
  },
  {
    classId: 3,
    className: '논리적사고와글쓰기(인문)',
    Professor: '이정환',
    ClassTime: '화34,목34',
    lectureRoom: 'C720',
    Classification: '교양필수',
    Grades: 3,
    continuity: [2, 2],
    keyWords: ['토론이 많은', '실습 위주의'],
  },
  {
    classId: 4,
    className: '논리적사고와글쓰기(인문)',
    Professor: '홍인숙',
    ClassTime: '월34,수34',
    lectureRoom: 'C717',
    Classification: '교양필수',
    Grades: 3,
    continuity: [2, 2],
    keyWords: ['실습 위주의', '토론이 많은'],
  },
  {
    classId: 5,
    className: '논리적사고와글쓰기(인문)',
    Professor: '구봉곤',
    ClassTime: '화78,목78',
    lectureRoom: 'C718',
    Classification: '교양필수',
    Grades: 3,
    continuity: [2, 2],
    keyWords: ['다양한 지식을 쌓는', '가벼운 타과 전공'],
  },
  {
    classId: 6,
    className: '논리적사고와글쓰기(인문)',
    Professor: '김기란',
    ClassTime: '수78,금78',
    lectureRoom: 'C709',
    Classification: '교양필수',
    Grades: 3,
    continuity: [2, 2],
    keyWords: ['건강을 위한', '실습 위주의'],
  },
  {
    classId: 7,
    className: '논리적사고와글쓰기(인문)',
    Professor: '유정월',
    ClassTime: '화78,목78',
    lectureRoom: 'C715',
    Classification: '교양필수',
    Grades: 3,
    continuity: [2, 2],
    keyWords: ['가벼운 타과 전공', '다양한 지식을 쌓는'],
  },
  {
    classId: 8,
    className: '소프트웨어공학',
    Professor: '김한규',
    ClassTime: '월3,화3,수3',
    lectureRoom: 'T503,T606',
    Classification: '전공필수',
    Grades: 3,
    continuity: [1, 1, 1],
    keyWords: ['토론이 많은', '실습 위주의'],
  },
  {
    classId: 9,
    className: '소프트웨어공학',
    Professor: '김은삼',
    ClassTime: '월8,화8,목8',
    lectureRoom: 'T502',
    Classification: '전공필수',
    Grades: 3,
    continuity: [1, 1, 1],
    keyWords: ['실습 위주의', '토론이 많은'],
  },
  {
    classId: 10,
    className: '기초발성(1)',
    Professor: '홍세원',
    ClassTime: '목234',
    lectureRoom: 'DA705',
    Classification: '전공선택',
    Grades: 3,
    continuity: [3],
    keyWords: ['다양한 지식을 쌓는', '건강을 위한'],
  },
  {
    classId: 11,
    className: '여가생활과레크레이션',
    Professor: '신말연',
    ClassTime: '금34',
    lectureRoom: 'T014',
    Classification: '교양선택',
    Grades: 3,
    continuity: [2],
    keyWords: ['가벼운 타과 전공', '실습 위주의'],
  },
  {
    classId: 12,
    className: '여가생활과레크레이션',
    Professor: '신말연',
    ClassTime: '금56',
    lectureRoom: 'T014',
    Classification: '교양선택',
    Grades: 2,
    continuity: [2],
    keyWords: ['건강을 위한', '가벼운 타과 전공'],
  },
  {
    classId: 13,
    className: '인권과국가',
    Professor: '곽순근',
    ClassTime: '금567',
    lectureRoom: 'R616-2',
    Classification: '교양선택(법과생활)',
    Grades: 3,
    continuity: [3],
    keyWords: ['토론이 많은', '다양한 지식을 쌓는'],
  },
  {
    classId: 14,
    className: '현대인의의사소통',
    Professor: '김유리',
    ClassTime: '수678',
    lectureRoom: 'R420-1',
    Classification: '교양선택(언어와철학)',
    Grades: 3,
    continuity: [3],
    keyWords: ['실습 위주의', '가벼운 타과 전공'],
  },
  {
    classId: 15,
    className: '컴퓨터SW기초',
    Professor: '김일도',
    ClassTime: '월4,수23',
    lectureRoom: 'T602',
    Classification: '교양선택(과학과컴퓨터)',
    Grades: 3,
    continuity: [1, 2],
    keyWords: ['다양한 지식을 쌓는', '건강을 위한'],
  },
  {
    classId: 16,
    className: '사진예술의이해',
    Professor: '장성은',
    ClassTime: '금234',
    lectureRoom: 'R420-2',
    Classification: '교양선택(예술과디자인)',
    Grades: 3,
    continuity: [3],
    keyWords: ['가벼운 타과 전공', '다양한 지식을 쌓는'],
  },
  {
    classId: 17,
    className: '교양라틴어',
    Professor: '강봉석',
    ClassTime: '목123',
    lectureRoom: 'R910',
    Classification: '교양선택',
    Grades: 3,
    continuity: [3],
    keyWords: ['건강을 위한', '가벼운 타과 전공'],
  },
  {
    classId: 18,
    className: '고전음악의이해',
    Professor: '김형삼',
    ClassTime: '수678',
    lectureRoom: 'C820',
    Classification: '교양선택',
    Grades: 3,
    continuity: [3],
    keyWords: ['토론이 많은', '실습 위주의'],
  },
  {
    classId: 19,
    className: '협상의기술',
    Professor: '박우진',
    ClassTime: '목456',
    lectureRoom: 'R419',
    Classification: '교양선택',
    Grades: 3,
    continuity: [3],
    keyWords: ['실습 위주의', '토론이 많은'],
  },
];

export default function ClassList({ width, height, position, left, top }) {
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

  // 마지막 클릭한 수업 데이터
  const [nowClickClassArray, setNowClickClassArray] = useRecoilState(
    nowClickClassDataArray
  );

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
                setNowClickClassArray([]);

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
                setNowClickClass(clickedClass);

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
