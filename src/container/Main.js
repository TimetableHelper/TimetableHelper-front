import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRecoilValue } from 'recoil';
import { isLoginIn } from '../atoms';

import Header from '../component/Header';

import '../styles/container/Main.scss';
import { Ring } from '@uiball/loaders'; // 로딩 이미지
import 'animate.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

const exNewIssueData = [
  {
    key: 1,
    description: '2022년도 1학기 강의가 업데이트 되었습니다.',
    updateDay: '2022-11-11',
    detailLink: '/main',
  },
  {
    key: 2,
    description: '이용안내 페이지가 업데이트 되었습니다.',
    updateDay: '2022-11-11',
    detailLink: '/main',
  },
  {
    key: 3,
    description: '강의 정보에 대한 제보를 받습니다.',
    updateDay: '2022-11-11',
    detailLink: '/main',
  },
];

function Main() {
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
          <title>메인 홈</title>
        </Helmet>
      </HelmetProvider>
      <Header />

      {islogin ? (
        <>
          <main className="Main__Home">
            <div className="Main__LinkColumn">
              <div
                className="Main__linkBox"
                style={{
                  // 스타일은 나중에 이미지넣으면 삭제시킬것.
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Link to="/make-newtimetable">필수과목 선택하러가기</Link>
              </div>

              <div
                className="Main__linkBox"
                style={{
                  // 스타일은 나중에 이미지넣으면 삭제시킬것.
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Link to="/my-timetable">시간표 짜러가기</Link>
              </div>

              <div
                className="Main__linkBox"
                style={{
                  // 스타일은 나중에 이미지넣으면 삭제시킬것.
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Link to="/timetable-board">학우들의 시간표 보러가기</Link>
              </div>
            </div>
            <div className="Main__NewIssue">
              <div className="Main__NewIssue__title">
                <HiOutlineSpeakerphone
                  style={{
                    color: '#768FFF',
                    width: '20px',
                    height: '30px',
                    paddingBottom: '5px',
                  }}
                />{' '}
                새로운 소식
              </div>
              <div className="Main__NewIssue__contents">
                {exNewIssueData.map((data) => {
                  return (
                    <div className="Main__NewIssue__contents__div">
                      <span>
                        <Link to={data.detailLink}>{data.description}</Link>
                      </span>
                      <span>{data.updateDay}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="Main__Information">
              <div className="Main__Information__title">
                <AiOutlineInfoCircle
                  style={{
                    color: '#768FFF',
                    width: '25x',
                    height: '25px',
                    paddingBottom: '5px',
                  }}
                />{' '}
                이용안내
              </div>
            </div>
          </main>
        </>
      ) : (
        <>
          <div className="loadingImg">
            <Ring size={50} lineWeight={5} speed={2} color="#4c6ef5" />
          </div>

          {/* <div class="ring">
            Loading
            <span></span>
          </div> */}
        </>
      )}
    </>
  );
}
export default Main;
