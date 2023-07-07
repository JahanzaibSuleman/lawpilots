import React, { useState } from 'react';
import './App.css';
import { Button, Modal } from './components';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Button label='Button' onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} >
        hello
      </Modal>
    </div>
  );
}

export default App;
