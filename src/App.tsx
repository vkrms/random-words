'use client'

import React from 'react';

import Word from '@/components/word';
import { nouns } from '@/data/nouns';

const nArray = (n: number) => Array.from({ length: n }, (_, i) => i);

const App: React.FC = () => {
  const [, setRefresh] = React.useState(0);

  function refresh() {
    setRefresh((prev) => prev + 1);
  }

  return (
    <>
      <div className="w-fit m-auto h-screen gap-4 flex items-center">
        {
          nArray(2).map((_, i) => (
            <Word key={i} array={nouns} />
          ))
        }
      </div>


      <button onClick={refresh} className="absolute top-0 right-0 m-4 p-2 rounded text-3xl refresh_btn">
        ♺
      </button>
    </>
  );
};

export default App
