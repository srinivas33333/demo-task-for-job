// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

import {  createContext, useState } from 'react';

export const searchContext = createContext();

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
        <searchContext.Provider value={ { search, setSearch } }>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
          </searchContext.Provider>
    </div>
  );
}

export default App;
