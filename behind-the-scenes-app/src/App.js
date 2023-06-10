import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph((prevState) => {
        return !prevState;
      });
    }
    
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  console.log('APP RUNNING!');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput showParagraph={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <hr />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
