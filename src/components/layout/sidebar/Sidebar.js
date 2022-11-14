import React from 'react';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import PhoneIcon from '@mui/icons-material/Phone';
import DuoIcon from '@mui/icons-material/Duo';
import PersonIcon from '@mui/icons-material/Person';
import NoteIcon from '@mui/icons-material/Note';
import StarIcon from '@mui/icons-material/Star';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SidebarOptions from './SidebarOptions';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../../features/mailSlice';

const Sidebar = () => {
  const dispatch = useDispatch(openSendMessage);
  return (
    <div className='Sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar-compose'
        onClick={() => dispatch(openSendMessage())}
      >
        COMPOSE
      </Button>
      <SidebarOptions
        Icon={<InboxIcon />}
        title='Inbox'
        number={77}
        selected={true}
      />
      <SidebarOptions Icon={<StarIcon />} title='Starred' number={77} />
      <SidebarOptions Icon={<AccessTimeIcon />} title='Snoozed' number={77} />
      <SidebarOptions
        Icon={<LabelImportantIcon />}
        title='Important'
        number={77}
      />
      <SidebarOptions Icon={<NearMeIcon />} title='Sent' number={77} />
      <SidebarOptions Icon={<NoteIcon />} title='Draft' number={77} />
      <SidebarOptions Icon={<ExpandMoreIcon />} title='More' number={77} />

      <div className='sidebar-footer'>
        <div className='sidebar-footer-icons'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
