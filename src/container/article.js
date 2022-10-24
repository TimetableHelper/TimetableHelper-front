import '../styles/container/article.scss';
// import classInfoList from './class-info-list';
import BlueBtn from '../component/bluebutton';
// import GoSchedule from './go-schedule';
//  import TopBanner from './Top-banner';
import Header from '../component/Header';
import ClassList from '../component/select-class-schedule';

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRecoilValue } from 'recoil';
import { isLoginIn } from '../atoms';

export default function Article() {
  const islogin = useRecoilValue(isLoginIn);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>필수수강선택</title>
        </Helmet>
      </HelmetProvider>

      <Header />

      {islogin ? (
        <>
          <h1 className="article__title">
            이번 학기에 수강할 필수 과목들을 선택해주세요
          </h1>
          <p className="article__sub-title">
            강의 정보는 다음 페이지에서도 확인하실 수 있습니다
          </p>
          <ClassList
            width="700px"
            height="540px"
            position="relative"
            /*left="370px"*/
            top="20px"
          />
          <BlueBtn text="시간표 짜러가기" link="/my-timetable" />
        </>
      ) : (
        <span>로그인 아닌데 이 페이지에 접근했을때 어떻게 할지 ?</span>
      )}
    </>
  );
}
