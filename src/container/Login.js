import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../component/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { isLoginIn, studentID } from '../atoms';
import { useRecoilState } from 'recoil';

function Login(props) {
  const [login, setLogin] = useRecoilState(isLoginIn);
  const [studentId, setStudentId] = useRecoilState(studentID);

  const [loading, setLoading] = useState(false);
  const [id, setInputId] = useState('');
  const [password, setInputPw] = useState('');
  const [failModal, setFailModal] = useState(false);

  //  const [Msg, setMsg] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //   await new Promise((r) => setTimeout(r, 10000));
    //   console.log('handle');
  };

  const axiosCheck = (e) => {
    setLogin(true);
    setStudentId(id);
    console.log('login', login);
    //   e.preventDefault();
    document.location.href = '/class-list';

    /*
 axios
      .post(`/app/sign-in`, {
        email: id,
        password: password,
      })
      .then((res) => {
        if ($("#loginAuto").is(':checked')) 
        // 로그인 성공 => 
        localStorage.setItem("jwToken", res.data.result.jwt);
        else
        // 로그인 실패 => 
          sessionStorage.setItem("jwToken", res.data.result.jwt);
        document.location.href = "/";
      })
      .catch((error) => {
        setFailModal(true);
        setInputPw("");
        setTimeout(() => {
          setFailModal(false);
        }, 5000);
      });
*/
  };
  const failLogin = () => {
    setFailModal(true);
    setTimeout(() => {
      setFailModal(false);
    }, 3000);
  };

  // 서버와 통신 전, 임시값 2개
  const [loginok, setloginok] = useState(true);

  const LoginFunc = (e) => {
    //    e.preventDefault();
    if (!id) {
      return alert('ID를 입력하세요.');
    } else if (!password) {
      return alert('Password를 입력하세요.');
    } else {
      let body = {
        id,
        password,
      };
      /*
      axios.post('api', body).then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          console.log('로그인');
          */
      // dispatch(loginUser(res.data.userInfo));

      // 200이뜨면 다음페이지로 이동

      if (loginok) {
        // 로그인 성공
        axiosCheck();
      } else if (!loginok) {
        // 로그인 실패
        failLogin();
      }

      /*          setMsg('');
        }
        if (res.data.code === 400) {
          setMsg('ID, Password가 비어있습니다.');
        }
        if (res.data.code === 401) {
          setMsg('존재하지 않는 ID입니다.');
        }
        if (res.data.code === 402) {
          setMsg('Password가 틀립니다.');
        }
      });
      */
    }
    setLoading(true);
  };

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
          <form onSubmit={handleSubmit}>
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
                onChange={handleInputId}
                value={id}
              />
              <label htmlFor="floatingInput">학번</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control h-100"
                id="floatinngPassword"
                placeholder="비밀번호"
                autoComplete="on"
                value={password}
                onChange={handleInputPw}
              />
              <label htmlFor="floatingPassword">비밀번호</label>
            </div>
            {failModal && (
              <div
                className="login-iscorrect"
                style={{ position: 'absolute', color: 'red' }}
              >
                로그인 정보가 일치하지 않습니다.
                {/* (등장할때 애니메이션 넣으면 좋을것같음.) */}
              </div>
            )}

            <div
              type="submit"
              className="btn btn-primary btn-sido"
              onClick={
                () => LoginFunc()
                // failModal ? failLogin : axiosCheck
              }
            >
              로그인
            </div>
            {/* <Link to={'/class-list'}>
            </Link> */}
            <button onClick={() => setloginok(true)}>로그인 성공 예시</button>
            <button onClick={() => setloginok(false)}>로그인 실패 예시</button>
          </form>
          <p className="p-p a-pwpage">
            <Link to="/sign-up">비밀번호 찾기</Link>
          </p>
        </main>
      </div>
    </>
  );
}

export default Login;
