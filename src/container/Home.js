import { useState } from 'react';
import Login from './Login';

import { useRecoilValue } from 'recoil';
import { isLoginIn } from '../atoms';
import Main from './Main';

function Home() {
  const islogin = useRecoilValue(isLoginIn);

  return <>{islogin ? <Main /> : <Login />}</>;
}

export default Home;
