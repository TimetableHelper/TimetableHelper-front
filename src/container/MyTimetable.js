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
import { Ring } from '@uiball/loaders'; // 로딩 이미지
import 'animate.css';

function MyTimetable() {
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
          <title>강의 정보</title>
        </Helmet>
      </HelmetProvider>
      <Header />

      {islogin ? (
        <>
          <div className="__column">
            <div className="__left">
              <Timetable />
            </div>
            <div className="__right">
              <div className="__right__one">
                <ClassList width="610px" height="310px" />
              </div>
              <div className="__right__two">
                <SearchClassList />
              </div>
            </div>
          </div>
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
export default MyTimetable;
