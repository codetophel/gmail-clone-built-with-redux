import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/sidebar/Sidebar';
import EmailList from './components/layout/email/EmailList';
import Mail from './components/layout/email/Mail';
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='app-body'>
          <Sidebar />
          <Routes>
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
