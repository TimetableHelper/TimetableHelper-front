import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSetRecoilState } from 'recoil';
import { isLoginIn } from '../atoms';
import Header from '../component/Header';
import '../styles/container/DemoEntry.scss';

const demoPaths = new Set([
  '/',
  '/main',
  '/make-newtimetable',
  '/my-timetable',
  '/timetable-board',
]);

function Login() {
  const setLogin = useSetRecoilState(isLoginIn);
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id.trim() || !password.trim()) {
      setError('체험용 아이디와 비밀번호를 각각 입력해주세요.');
      return;
    }

    // The inputs only open the demo. Do not persist or send either value.
    const requestedPath = location.state?.from;
    const destination =
      typeof requestedPath === 'string' &&
      demoPaths.has(requestedPath.split(/[?#]/)[0])
        ? requestedPath
        : '/';
    setId('');
    setPassword('');
    setError('');
    setLogin(true);
    navigate(destination, { replace: true });
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>로그인 · 시도</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <main className="form-signin m-auto demo-login">
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <h1 className="p-h1 title-margin-login">로그인</h1>
          <p className="demo-login__notice" id="demo-login-notice">
            임의의 아이디와 비밀번호(예: demo / demo)를 입력해주세요.
            <br />
            실제 인증이나 계정 정보 저장 없이 화면을 체험합니다.
          </p>
          <div className="form-floating">
            <input
              type="text"
              className="form-control h-100"
              id="demo-id"
              name="demo-id"
              placeholder="아이디"
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              aria-describedby="demo-login-notice demo-login-error"
              aria-invalid={Boolean(error)}
              value={id}
              onChange={(event) => {
                setId(event.target.value);
                setError('');
              }}
            />
            <label htmlFor="demo-id">아이디</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control h-100"
              id="demo-password"
              name="demo-password"
              placeholder="비밀번호"
              autoComplete="new-password"
              aria-describedby="demo-login-notice demo-login-error"
              aria-invalid={Boolean(error)}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError('');
              }}
            />
            <label htmlFor="demo-password">비밀번호</label>
          </div>
          <p id="demo-login-error" className="demo-login__error" role="alert">
            {error}
          </p>
          <button type="submit" className="btn btn-primary btn-sido">
            로그인
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
