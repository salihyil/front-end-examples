import React from 'react';

import Data from '../data.json';

import {Conversation} from './components/Conversation';

function App() {
  return (
    <div className='container'>
      <Conversation {...Data} />
    </div>
  );
}

export default App;
