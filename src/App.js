import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Sidebar from './components/layout/sidebar/Sidebar';
import EmailList from './components/layout/email/EmailList';
import Mail from './components/pages/Mail';
import SendMail from './components/layout/modal/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/pages/Login';
import { auth } from './db/firebase';
import { login } from './features/userSlice';
import './App.css';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    });
    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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
      )}
    </Router>
  );
}

export default App;
