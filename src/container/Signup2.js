import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

import {
  major_forSignUp,
  grade_forSignUp,
  studentID_forSignUp,
  password_forSignUp,
} from '../atoms';

function Signup2(props) {
  const major = useRecoilValue(major_forSignUp);
  const grade = useRecoilValue(grade_forSignUp);
  const studentID = useRecoilValue(studentID_forSignUp);
  const password = useRecoilValue(password_forSignUp);

  const exampleSignupData = [
    {
      essentialCultureClass: ['영어', '전공기초영어', '논리적사고와글쓰기'],
      mainCultureClass: [
        '예술과디자인',
        '제2외국어와한문',
        '과학과컴퓨터',
        '언어와철학',
        '법과생활',
        '사회와경제',
        '역사와문화',
      ],
    },
  ];

  // 아래 데이터를 서버로 보내면 됨.
  const [userDataToSendServer, setUserDataToSendServer] = useState([
    { essentialCultureClass: [], mainCultureClass: [] },
  ]);

  const addEssentialCultureClass = (data) => {
    const checkbox = document.getElementById(`signUp2__checkbox__${data}`);
    const is_checked = checkbox.checked;

    if (is_checked) {
      // 데이터가 안들어 있을경우 => userData에 담기,
      var temporaryCopySendDataData = [
        {
          essentialCultureClass: [
            ...userDataToSendServer[0].essentialCultureClass,
            data,
          ],
          mainCultureClass: [...userDataToSendServer[0].mainCultureClass],
        },
      ];
      setUserDataToSendServer(temporaryCopySendDataData);
    } else {
      // 데이터가 들어 있을경우 = 토글기능 => 담기X ,data삭제,
      var copyTemp = userDataToSendServer[0].essentialCultureClass.filter(
        (className) => className !== data
      );

      var deleteCopySendDataData = [
        {
          essentialCultureClass: copyTemp,
          mainCultureClass: [...userDataToSendServer[0].mainCultureClass],
        },
      ];
      setUserDataToSendServer(deleteCopySendDataData);
    }
  };

  const addMainCultureClass = (data) => {
    const checkbox = document.getElementById(`signUp2__checkbox__${data}`);
    const is_checked = checkbox.checked;

    if (is_checked) {
      // 데이터가 안들어 있을경우 => userData에 담기,
      var temporaryCopySendDataData = [
        {
          essentialCultureClass: [
            ...userDataToSendServer[0].essentialCultureClass,
          ],
          mainCultureClass: [...userDataToSendServer[0].mainCultureClass, data],
        },
      ];
      setUserDataToSendServer(temporaryCopySendDataData);
    } else {
      // 데이터가 들어 있을경우 = 토글기능 => 담기X ,data삭제,
      var copyTemp = userDataToSendServer[0].mainCultureClass.filter(
        (className) => className !== data
      );

      var deleteCopySendDataData = [
        {
          essentialCultureClass: [
            ...userDataToSendServer[0].essentialCultureClass,
          ],
          mainCultureClass: copyTemp,
        },
      ];
      setUserDataToSendServer(deleteCopySendDataData);
    }
  };

  console.log('userDataToSendServer', userDataToSendServer);
  const axiosPost = () => {
    // 서버로 데이터 보내기
    console.log('서버로 데이터 보내기');

    axios
      .post(`/users/sign-in`, {
        id: studentID,
        pw: password,
        major: major,
        grade: grade,
        //        coreSubject: userDataToSendServer[0].essentialCultureClass, //필수교양
        //        compSubject: userDataToSendServer[0].mainCultureClass, //핵심교양
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
  };

  return (
    <>
      <Header />
      <div>
        <main className="form-signin m-auto">
          <form>
            <p className="p-h1 title-margin-login">회원가입</p>

            <p className="p-p">이미 수강한 과목을 모두 체크해주세요</p>

            <div className="row">
              <div className="col-6">
                <p className="p-checkbox-login">필수교양</p>

                {exampleSignupData[0].essentialCultureClass.map(
                  (data, index) => {
                    return (
                      <>
                        <div className="form-check" key={index}>
                          <input
                            className="form-check-input"
                            key={data}
                            type="checkbox"
                            value=""
                            id={`signUp2__checkbox__${data}`}
                            onChange={(e) => {
                              addEssentialCultureClass(data);
                            }}
                          />
                          <label
                            className="form-check-label"
                            key={`essential-label-key-${data}`}
                            htmlFor={`signUp2__checkbox__${data}`}
                          >
                            {data}
                          </label>
                        </div>
                      </>
                    );
                  }
                )}
              </div>

              <div className="col-6">
                <p className="p-checkbox-login">핵심교양영역</p>
                {exampleSignupData[0].mainCultureClass.map((data, index) => {
                  return (
                    <>
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          key={data}
                          type="checkbox"
                          value=""
                          id={`signUp2__checkbox__${data}`}
                          onChange={() => {
                            addMainCultureClass(data);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`signUp2__checkbox__${data}`}
                          key={`main-label-key-${data}`}
                        >
                          {data}
                        </label>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <Link to="/">
              <button
                className="btn btn-primary btn-sido"
                type="submit"
                onClick={() => {
                  axiosPost();
                }}
              >
                회원가입
              </button>
            </Link>
          </form>
        </main>
      </div>
    </>
  );
}

export default Signup2;
