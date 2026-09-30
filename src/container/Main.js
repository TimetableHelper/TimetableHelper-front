import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Header from '../component/Header';
import '../styles/container/Main.scss';

function Main() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>이용안내 · 시도</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <main className="Main__Home">
        <div className="Main__LinkColumn">
          <Link to="/make-newtimetable">
            <div className="Main__linkBox Main__linkBox_1st">
              <span>필수과목 선택하러가기</span>
            </div>
          </Link>
          <Link to="/my-timetable">
            <div className="Main__linkBox Main__linkBox_2nd">
              <span>시간표 짜러가기</span>
            </div>
          </Link>
          <Link to="/timetable-board">
            <div className="Main__linkBox Main__linkBox_3rd">
              <span>학우들의 시간표 보러가기</span>
            </div>
          </Link>
        </div>

        <section className="Main__Information" aria-labelledby="guide-title">
          <h1 className="Main__Information__title" id="guide-title">
            <AiOutlineInfoCircle aria-hidden="true" />
            이용안내
          </h1>
          <ol className="Main__Information__steps">
            <li>
              <strong>강의를 선택하세요</strong>
              <p>강의 목록에서 과목을 누르면 내 시간표에 배치됩니다. 강의 정보와 시간을 함께 확인해보세요.</p>
            </li>
            <li>
              <strong>겹치는 시간을 조정하세요</strong>
              <p>시간이 겹치는 강의를 선택하면 교체 여부를 묻습니다. 시간표의 삭제 버튼으로 강의를 뺄 수도 있습니다.</p>
            </li>
            <li>
              <strong>같은 브라우저에서 이어서 확인하세요</strong>
              <p>시간표는 이 브라우저에 자동으로 저장됩니다. 새로고침하거나 다시 방문해도 유지되지만, 브라우저 데이터를 지우면 함께 삭제됩니다.</p>
            </li>
            <li>
              <strong>게시판은 샘플로 둘러보세요</strong>
              <p>준비된 시간표와 반응 화면을 체험할 수 있습니다. 다른 사용자에게 게시하거나 실시간으로 공유하는 기능은 제공하지 않습니다.</p>
            </li>
          </ol>
          <p className="Main__Information__note">시연용 강의 데이터입니다. 실제 수강 신청이나 최신 개설 강의 안내용으로 사용하지 않습니다.</p>
        </section>
      </main>
    </>
  );
}

export default Main;
