import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevState) => {
      return !prevState;
    });
  };

  console.log('APP RUNNING!');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput showParagraph={false}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
