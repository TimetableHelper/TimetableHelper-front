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
import AlertModalShow from '../component/alertNotLoginModalShow';

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
      {showModal && <AlertModalShow />}

      <HelmetProvider>
        <Helmet>
          <title>강의 정보</title>
        </Helmet>
      </HelmetProvider>
      <Header />

      {islogin ? (
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
