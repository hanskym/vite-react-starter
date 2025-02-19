import { useState } from 'react';

import reactRouterLogo from '@/assets/react-router.svg';
import reactLogo from '@/assets/react.svg';

import viteLogo from '/vite.svg';

export function meta() {
  return [
    { title: 'Vite + React + React Router' },
    { name: 'description', content: 'Welcome to Vite + React + React Router!' },
  ];
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer">
          <img src={reactRouterLogo} className="logo react-router" alt="React Router logo" />
        </a>
      </div>
      <h1>Vite + React + React Router</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/routes/_index.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, and React Router logos to learn more
      </p>
    </>
  );
}

export default App;
