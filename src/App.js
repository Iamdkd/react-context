import React, {useRef, useEffect } from 'react';
import './App.css';
import { GlobalContextProvider } from './contexts/global-context';
import Container from './components/Container';

function App() {

  let initState = useRef(true);

  useEffect(() => {
    if (initState.current) {
      initState.current = false;
      console.log("==> App Component Created +")
    } else {
      console.log("==> App Component Updated ++")
    }
  });

  return (
    <div className="App">
      <GlobalContextProvider>
        <header className="App-header">
          App Component
          <Container/>
        </header>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
