import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import Section from './Section';
import EmailRow from './EmailRow';
import './EmailList.css';

const EmailList = () => {
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
        <EmailRow
          title='Gmail'
          description='This is a test'
          subject='Lets create gmail app'
          time='7am'
        />
        <EmailRow
          title='Gmail'
          description='This is a test'
          subject='Lets create gmail app'
          time='7am'
        />
      </div>
    </div>
  );
};

export default EmailList;
