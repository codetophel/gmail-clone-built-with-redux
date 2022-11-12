import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Email from './Email';
import EmailList from './EmailList';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/mail' element={<Email />} />
          <Route path='/' element={<EmailList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
