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

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/sign-up2" element={<Signup2 />}></Route>
        <Route path="/make-newtimetable" element={<Article />}></Route>
        <Route path="/my-timetable" element={<MyTimetable />}></Route>
        <Route path="/timetable-board" element={<TimetableBoard />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
