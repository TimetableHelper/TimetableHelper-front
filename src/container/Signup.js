import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import '../styles/container/Login.scss';

function Signup() {
  const [major, setMajor] = useState('');
  const [grade, setGrade] = useState();
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  console.log(
    `major: ${major}, grade:${grade}, studentID:${studentID}, password:${password} `
  );

  const [okGO2, setOkGo2] = useState(false);

  useEffect(() => {
    // 4개의 인풋이 다 채워졌다면 = > setOkGo2(true)
    if (major && grade && studentID && password) {
      setOkGo2(true);
    } else if (major || grade || studentID || password) {
      setOkGo2(false);
    }
    // 다 채워진 이후에, 4개의 인풋중에 빈칸이 생긴다면= > setOkGo2(false)
  }, [grade, major, password, studentID]);

  const blinkAlert = () => {
    if (!studentID) {
      alert('아이디');
    }
    if (!password) {
      alert('비번');
    }
    if (!major) {
      alert('전공');
    }
    if (!grade) {
      alert('학년');
    }
  };

  return (
    <>
      <Header />
      <div>
        <main className="form-signin m-auto">
          <form>
            <p className="p-h1 title-margin-login">회원가입</p>

            <div className="form-floating">
              <input
                type="text"
                className="form-control h-100"
                id="floatingInput"
                placeholder="학번"
                value={studentID}
                onChange={(e) => {
                  setStudentID(e.target.value);
                }}
              />
              <label htmlFor="floatingInput">학번</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control h-100"
                id="floatinngPassword"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="floatingPassword">비밀번호</label>
            </div>

            <div className="row-signup row">
              <div className="col-md-8">
                <select
                  defaultValue={'DEFAULT'}
                  className="form-select"
                  aria-label="전공"
                  onChange={(e) => {
                    setMajor(e.target.value);
                  }}
                >
                  <option value="DEFAULT" disabled>
                    전공
                  </option>
                  <option value="전자전기공학부">전자전기공학부</option>
                  <option value="컴퓨터공학과">컴퓨터공학과</option>
                  <option value="산업 데이터공학과">산업 데이터공학과</option>
                  <option value="신소재공학과">신소재공학과</option>
                  <option value="화학공학과">화학공학과</option>
                  <option value="기계 시스템디자인공학과">
                    기계 시스템디자인공학과
                  </option>
                  <option value="건축학과">건축학과</option>
                  <option value="실내건축학과">실내건축학과</option>
                  <option value="도시공학과">도시공학과</option>
                  <option value="경영학과">경영학과</option>
                  <option value="영어영문학과">영어영문학과</option>
                  <option value="독어독문학과">독어독문학과</option>
                  <option value="불어불문학과">불어불문학과</option>
                  <option value="국어국문학과">국어국문학과</option>
                  <option value="법학과">법학과</option>
                  <option value="수학교육과">수학교육과</option>
                  <option value="국어교육과">국어교육과</option>
                  <option value="영어교육과">영어교육과</option>
                  <option value="역사교육과">역사교육과</option>
                  <option value="교육학과">교육학과</option>
                  <option value="동양화과">동양화과</option>
                  <option value="회화과">회화과</option>
                  <option value="판화과">판화과</option>
                  <option value="조소과">조소과</option>
                  <option value="목조형가구학과">목조형가구학과</option>
                  <option value="예술학과">예술학과</option>
                  <option value="금속조형디자인과">금속조형디자인과</option>
                  <option value="도예유리과">도예유리과</option>
                  <option value="섬유미술패션디자인과">
                    섬유미술패션디자인과
                  </option>
                  <option value="시각디자인과">시각디자인과</option>
                  <option value="산업디자인과">산업디자인과</option>
                  <option value="미술대학 자율전공">미술대학 자율전공</option>
                  <option value="경제학과">경제학과</option>
                  <option value="캠퍼스자율전공">캠퍼스자율전공</option>
                  <option value="뮤지컬전공">뮤지컬전공</option>
                  <option value="실용음악전공">실용음악전공</option>
                </select>
              </div>
              <div className="col-md-4">
                <select
                  className="form-select"
                  aria-label="학년"
                  defaultValue={'DEFAULT'}
                  onChange={(e) => {
                    setGrade(e.target.value);
                  }}
                >
                  <option value="DEFAULT" disabled>
                    학년
                  </option>
                  <option value="1">1학년</option>
                  <option value="2">2학년</option>
                  <option value="3">3학년</option>
                  <option value="4">4학년 이상</option>
                </select>
              </div>
            </div>

            {okGO2 ? (
              <Link to="/sign-up2">
                <button className="btn btn-outline-primary w-100" type="submit">
                  다음 True
                </button>
              </Link>
            ) : (
              <div
                className="btn w-100 signup__nextBtn__disabled"
                type="submit"
                onClick={() => {
                  blinkAlert();
                }}
                disabled
              >
                다음 False
              </div>
            )}
          </form>
        </main>
      </div>
    </>
  );
}

export default Signup;
