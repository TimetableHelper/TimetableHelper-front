import { useEffect, useState } from 'react';
import Header from '../component/Header';
import '../styles/container/TimetableBoard.scss';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { useRecoilValue } from 'recoil';
import { isLoginIn } from '../atoms';
import { Ring } from '@uiball/loaders'; // 로딩 이미지

export default function TimetableBoard() {
  const islogin = useRecoilValue(isLoginIn);
  const [showModal, setshowModal] = useState(true);

  useEffect(() => {
    if (!islogin) {
      setshowModal(true);
    } else if (islogin) {
      setshowModal(false);
    }
  }, []);

  useEffect(() => {
    // 서버에서 로그인한 유저의 데이터 받아오기
  }, []);

  const [userData, setUserData] = useState({
    major: '컴퓨터공학과',
    grade: '4학년',
  });

  let sharedTimetableData = [
    {
      studentID: 23,
      key: 1,
      emojiNum: [52, 24, 12],
    },
    {
      studentID: 23,
      key: 2,
      emojiNum: [31, 21, 13],
    },
    { studentID: 123, key: 3, emojiNum: [29, 17, 21] },
    { studentID: 234, key: 4, emojiNum: [25, 21, 11] },
    { studentID: 345, key: 5, emojiNum: [20, 20, 13] },
    { studentID: 456, key: 6, emojiNum: [12, 8, 23] },
    { studentID: 567, key: 7, emojiNum: [10, 12, 12] },
    { studentID: 678, key: 8, emojiNum: [7, 5, 2] },
    { studentID: 789, key: 9, emojiNum: [3, 4, 2] },
  ];

  return (
    <>
      {showModal && (
        <div className="alertModalDiv">
          <div
            style={{
              width: '100%',
              height: '20px',
              backgroundColor: '#91a7ff',
            }}
          ></div>
          <h4>로그인이 필요한 페이지입니다.</h4>
          <button
            onClick={() => {
              document.location.href = '/';
            }}
          >
            확인
          </button>
        </div>
      )}

      <HelmetProvider>
        <Helmet>
          <title>강의 정보</title>
        </Helmet>
      </HelmetProvider>
      <Header />

      {islogin ? (
        <>
          <div className="timetableBoard__title">
            <div className="timetableBoard__title-major">
              <span>{userData.major}</span>
            </div>
            <div className="timetableBoard__title-grade">
              <span>{userData.grade}</span>
            </div>
            <span>학우들의 시간표 게시판</span>
          </div>
          <div className="timetableBoard__main">
            <div className="timetableBoard__bestTimetable">
              <h4>ㅁ 학우들이 선택한 베스트 시간표 </h4>
              <div className="timetableBoard__bestTimetable__img"></div>
              <div className="timetableBoard__bestTimetable__emoji">
                🧡 98️ 😄 76 😱 5
              </div>
            </div>
            <div className="timetableBoard__sharedTimetable">
              {sharedTimetableData.map((data) => {
                return (
                  <div
                    className="timetableBoard__sharedTimetable__column"
                    key={data.key}
                  >
                    <div className="timetableBoard__sharedTimetable__img">
                      {data.key}
                    </div>
                    <div className="timetableBoard__sharedTimetable__emoji">
                      🧡 {data.emojiNum[0]} 😄 {data.emojiNum[1]} 😱
                      {data.emojiNum[2]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="loadingImg">
            <Ring size={50} lineWeight={5} speed={2} color="#4c6ef5" />
          </div>
        </>
      )}
    </>
  );
}
