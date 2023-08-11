import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
            
          
          <Route path="/"element={<LoginPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
