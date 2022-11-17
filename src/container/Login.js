import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../component/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { isLoginIn, studentID } from '../atoms';
import { useRecoilState } from 'recoil';
import axios from 'axios';

function Login(props) {
  const [isLoginedState, setisLoginedState] = useRecoilState(isLoginIn);
  useEffect(() => {
    //    const isLoginedState = window.localStorage.getItem('isLoginIn');
    if (isLoginedState) {
      // 로그인 상태라면 페이지 건너뛰기
      document.location.href = '/main';
    }
  }, []);

  const [login, setLogin] = useRecoilState(isLoginIn);
  const [studentId, setStudentId] = useRecoilState(studentID);

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
    //   e.preventDefault();
    //    document.location.href = '/main';

    axios
      .post(`/users/:id`, {
        id: id,
        pw: password,
      })
      .then((res) => {
        //        setFailModalContext('신청이 완료되었습니다!');
        //        setFailModal(true);
        console.log('res', res);
        //         setFailModal(false);
        //         document.location.href = '/';
        //       }, 1300);
      })
      .catch((error) => {
        console.log('error', error);
        //        setFailModalContext(error.response.data.message);
        //        setFailModal(true);
        //       setTimeout(() => {
        //          setFailModal(false);
      });

    /*
    ///////////////////////////////////

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
    //   setTimeout(() => {
    // N초후에 로그인 에러 경고메세지 사라지게
    //      setFailModal(false);
    //   }, 7500);
  };

  const LoginFunc = (e) => {
    setFailModal(false);
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

      /*    axios
      // .post(`/users/:id`, body)
        .post(`/users/${id}`, {
          id: id,
          pw: password,
        })
        .then((res) => {
          if (res.data.code === 200) {
            setisLoginedState(true);
          }
        })
        .catch((error) => {
          console.log('error', error);
          failLogin();
        }); */

      setisLoginedState(true);

      // dispatch(loginUser(res.data.userInfo));

      // 200이뜨면 다음페이지로 이동

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
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>로그인</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
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
                className="animate__animated animate__headShake"
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
