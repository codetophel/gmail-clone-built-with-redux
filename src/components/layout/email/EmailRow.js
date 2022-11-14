import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailRow.css';
import { IconButton, Checkbox } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';

const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  return (
    <div className='emailRow' onClick={() => navigate('/mail')}>
      <div className='emailRow-options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className='emailRow-title'> {title}</h3>
      <div className='emailRow-subject'>
        <h4>
          {subject}
          <span className='emailRow-description'> - {description}</span>
        </h4>
      </div>
      <p className='emailRow-time'>{time}</p>
    </div>
  );
};

export default EmailRow;
