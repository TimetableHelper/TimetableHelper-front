import React from 'react';
import './App.css';
import './custom.css';
import Router from './Router';

import Header from './component/Header';
import Login from './container/Login';

function App() {
  return (
    <>
      <Router />
      {/* <Header name="props.test" />
      <Login /> */}
    </>
  );
}

export default App;
