import React from 'react';
import './App.css';
import './custom.css';

import Header from './component/Header';
import Login from './component/Login';

function App() {
  return (
    <>
      <Header name="props.test" />
      <Login />
    </>
  );
}

export default App;
