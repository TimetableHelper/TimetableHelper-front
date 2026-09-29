import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginIn } from './atoms';
import MyTimetable from './container/MyTimetable';
import Article from './container/article';
import Login from './container/Login';
import TimetableBoard from './container/TimetableBoard';
import Main from './container/Main';
import AlertModalShow from './component/alertNotLoginModalShow';

export function AppRoutes() {
  const isLoggedIn = useRecoilValue(isLoginIn);
  const protectedPage = (page) => isLoggedIn ? page : <AlertModalShow />;

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Main /> : <Login />} />
      <Route path="/main" element={<Navigate to="/" replace />} />
      <Route path="/sign-up" element={<Navigate to="/" replace />} />
      <Route path="/sign-up2" element={<Navigate to="/" replace />} />
      <Route path="/make-newtimetable" element={protectedPage(<Article />)} />
      <Route path="/my-timetable" element={protectedPage(<MyTimetable />)} />
      <Route path="/timetable-board" element={protectedPage(<TimetableBoard />)} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default Router;
