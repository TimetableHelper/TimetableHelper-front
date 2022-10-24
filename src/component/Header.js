import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoginIn, studentID } from '../atoms';

function Header(props) {
  const [islogin, setlogin] = useRecoilState(isLoginIn);
  //  const studentId = useRecoilValue(studentID);

  // 아이콘 클릭시 사용할
  const isLoginedState = useRecoilState(isLoginIn)[0];

  const gohome = () => {
    document.location.href = '/';
    window.localStorage.removeItem('recoil-persist');
  };

  return (
    <>
      <div className="navigation">
        {/* <nav class="navbar navbar-expannd-lg bg-light">
                    <div class="containner-fluid">
                        <a class="navbar-brand" href="#">
                            대학생을 위한 시간표 도우미
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">이용안내</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">회원가입</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav> */}
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link
              to={isLoginedState ? `/class-list` : `/`}
              className="navbar-brand"
            >
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <p className="p-p p-nav">대학생을 위한 시간표 도우미</p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link to="/" className="nav-link active" aria-current="page">
                  이용안내
                </Link>
                <Link to="/" className="nav-link">
                  회원가입
                </Link>
                <Link to="/" className="nav-link disabled">
                  내시간표
                </Link>
                <Link to="/" className="nav-link disabled">
                  게시판
                </Link>
                {islogin && (
                  <button
                    onClick={() => {
                      gohome();
                    }}
                  >
                    setlogin
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
