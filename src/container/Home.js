import { useState } from 'react';
import Article from './article';
import Login from './Login';

function Home() {
  const [TorF, set] = useState(true);
  setTimeout(() => set((prev) => !prev), 1000);

  return <>{TorF ? <Login /> : <Article />}</>;
}

export default Home;
