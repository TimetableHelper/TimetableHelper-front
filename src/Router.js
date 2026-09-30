import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import MyTimetable from './container/MyTimetable';
import Article from './container/article';
import TimetableBoard from './container/TimetableBoard';
import Main from './container/Main';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Navigate to="/" replace />} />
      <Route path="/sign-up" element={<Navigate to="/" replace />} />
      <Route path="/sign-up2" element={<Navigate to="/" replace />} />
      <Route path="/make-newtimetable" element={<Article />} />
      <Route path="/my-timetable" element={<MyTimetable />} />
      <Route path="/timetable-board" element={<TimetableBoard />} />
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
