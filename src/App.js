import React, { useState } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState('Click the button')
  const onClick = async () => {
    setContent('loading...')
    const response = await fetch('/give-me-null')
    const data = await response.json()
    setContent(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>Click me</button>
        <span data-testid="response-content">
          {content === null ? `I'm null` : content}
        </span>
      </header>
    </div>
  );
}

export default App;
