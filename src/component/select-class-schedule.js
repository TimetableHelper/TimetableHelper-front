import '../styles/container/gridscss.scss';
import '../styles/container/mainVy.scss';
// import ShowClassList from '../component/show-class-list';
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
    continuity: 2,
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
  /* 
  var newheight = height.slice(0, 3);
  var newnew = Number(newheight) - 20;
  var newnewnew = newnew + 'px'; */
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
            <div className="grid__contents__columns" key={data.classId}>
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
