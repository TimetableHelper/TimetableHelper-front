import MontoSun from '../component/container/mon-to-sun';
import ClassList from '../component/select-class-schedule';
import SearchClassList from '../component/container/search-class-list';
import Header from '../component/Header';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { useRecoilValue } from 'recoil';
import { isLoginIn } from '../atoms';

import '../styles/container/select-in-classlist.scss';
import { Link } from 'react-router-dom';

function MyTimetable() {
  const islogin = useRecoilValue(isLoginIn);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>강의 정보</title>
        </Helmet>
        <Header />
      </HelmetProvider>

      {islogin ? (
        <>
          <div className="__column">
            <div className="__left">
              <MontoSun />
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
          <Link to="/timetable-board">
            <div
              style={{
                display: 'flex',
                fontSize: '50px',
                justifyContent: 'center',
                marginTop: '150px',
              }}
            >
              페이지이동 임시버튼
            </div>
          </Link>
        </>
      ) : (
        <span>로그인 아닌데 이 페이지에 접근했을때 어떻게 할지 ?</span>
      )}
    </>
  );
}
export default MyTimetable;
