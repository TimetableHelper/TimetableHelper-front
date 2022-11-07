import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import MyTimetable from './container/MyTimetable';
import Article from '../src/container/article';

import Header from './component/Header';
import Login from './container/Login';
import Signup from './container/Signup';
import Signup2 from './container/Signup2';
import TimetableBoard from './container/TimetableBoard';
import Main from './container/Main';

import { useRecoilValue } from 'recoil';
import { isLoginIn } from './atoms';
import AlertModalShow from '../src/component/alertNotLoginModalShow';

function Router() {
  const islogin = useRecoilValue(isLoginIn);
  let changePage = islogin;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/sign-up2" element={<Signup2 />}></Route>
        <Route
          path="/make-newtimetable"
          element={!islogin ? <AlertModalShow /> : <Article />}
        ></Route>
        <Route
          path="/my-timetable"
          element={!islogin ? <AlertModalShow /> : <MyTimetable />}
        ></Route>
        <Route
          path="/timetable-board"
          element={!islogin ? <AlertModalShow /> : <TimetableBoard />}
        ></Route>
        <Route
          path="/main"
          element={!islogin ? <AlertModalShow /> : <Main />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

/* 
        {!islogin && showModal && (
          <>
            <AlertModalShow className="AlertModalShow" />
          </>
        )}

*/
