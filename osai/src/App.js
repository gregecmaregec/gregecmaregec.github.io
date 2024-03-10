import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendClick = () => {
    setOutputText(inputText);
    setInputText('');
  };

  return (
    <div className="container">
      <div className="output-area">{outputText}</div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="input-field"
        />
        <button onClick={handleSendClick} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default App;