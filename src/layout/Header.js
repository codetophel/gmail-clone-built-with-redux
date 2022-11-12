import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton, Avatar } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <div className='header-left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://cdn.cdnlogo.com/logos/g/56/gmail.png'
          alt='gmail_logo'
        />
      </div>
      <div className='header-middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail...' />
        <ArrowDropDownIcon className='input_claret' />
      </div>
      <div className='header-right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
