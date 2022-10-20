import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import SelectInClasslist from '../src/container/select-in-classlist';
import Article from '../src/container/article';

import Header from './component/Header';
import Login from './container/Login';
import Signup from './container/Signup';
import Signup2 from './container/Signup2';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/sign-up2" element={<Signup2 />}></Route>
        <Route path="/class-list" element={<Article />}></Route>
        <Route path="/select-class" element={<SelectInClasslist />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
