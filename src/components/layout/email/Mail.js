import {
  ArrowBack,
  Delete,
  MoveToInbox,
  Error,
  WatchLater,
  CheckCircle,
  LabelImportant,
  MoreVert,
  UnfoldMore,
  Print,
  ExitToApp,
} from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Mail.css';

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className='Mail'>
      <div className='mail-tools'>
        <div className='mail-tools-left'>
          <IconButton onClick={() => navigate('/')}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className='mail-tools-right'>
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className='mail-body'>
        <div className='mail-body-header'>
          <h2>Subject</h2>
          <LabelImportant className='mail-important' />
          <p>Title</p>
          <p className='mail-time'>10pm</p>
        </div>
        <div className='mail-message'>
          <p>This is the message content...</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
