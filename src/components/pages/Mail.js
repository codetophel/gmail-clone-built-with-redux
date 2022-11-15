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
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectOpenMail } from '../../features/mailSlice';
import './Mail.css';

const Mail = () => {
  const selectedMail = useSelector(selectOpenMail);
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
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className='mail-important' />
          <p>{selectedMail?.to}</p>
          <p className='mail-time'>{selectedMail?.time}</p>
        </div>
        <div className='mail-message'>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
