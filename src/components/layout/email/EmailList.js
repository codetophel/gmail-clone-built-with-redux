import React, { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from '../../../db/firebase';
import { getDocs, collection, orderBy, query } from 'firebase/firestore';
import './EmailList.css';

const EmailList = () => {
  const [emails, setEmails] = useState(null);
  const [loading, setLoading] = useState(false);

  const getEmails = async () => {
    await getDocs(
      query(collection(db, 'emails'), orderBy('timestamp', 'desc'))
    ).then((snapshot) => {
      let allMails = [];
      snapshot.docs.map((doc) => {
        allMails.push({ id: doc.id, data: doc.data() });
        let res = allMails;
        setEmails(res);
        return res;
      });
    });
  };

  useEffect(() => {
    setLoading(true);
    getEmails();
    setLoading(false);
  }, [emails]);

  if (loading || emails === null) return <h4>loading...</h4>;

  return (
    <div className='emailList'>
      <div className='emailList-settings'>
        <div className='emailList-settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emailList-settingsRight'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className='emailList-sections'>
        <Section
          Icon={<InboxIcon />}
          title='Primary'
          color='red'
          selected={true}
        />
        <Section Icon={<PeopleIcon />} title='Social' color='#1a73e8' />
        <Section Icon={<LocalOfferIcon />} title='Promotions' color='green' />
      </div>

      <div className='emailList-list'>
        {!loading && emails.length === 0 ? (
          <p>No mails in inbox</p>
        ) : (
          emails.map(({ id, data: { to, subject, message, timestamp } }) => {
            return (
              <EmailRow
                key={id}
                id={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default EmailList;
