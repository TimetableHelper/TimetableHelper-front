import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Login(props) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>로그인</title>
        </Helmet>
      </HelmetProvider>

      <Header name="props.test" />
      <div>
        <main className="form-signin m-auto">
          <form>
            <p className="p-h1 title-margin-login">로그인</p>

            <p className="p-p text-end">
              아직 회원이 아니신가요?
              <Link to="/sign-up">회원가입</Link>
            </p>
            <div className="form-floating">
              <input
                type="text"
                className="form-control h-100"
                id="floatingInput"
                placeholder="학번"
              />
              <label htmlFor="floatingInput">학번</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control h-100"
                id="floatinngPassword"
                placeholder="비밀번호"
              />
              <label htmlFor="floatingPassword">비밀번호</label>
            </div>

            <Link to="/class-list">
              <button className="btn btn-primary btn-sido" type="submit">
                로그인
              </button>
            </Link>
            <p className="p-p a-pwpage">
              <Link to="/sign-up">비밀번호 찾기</Link>
            </p>
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;
