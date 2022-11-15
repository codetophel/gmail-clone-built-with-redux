import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import './SendMail.css';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../../features/mailSlice';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../db/firebase';

const SendMail = () => {
  const dispatch = useDispatch(closeSendMessage);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (formData) => {
    addDoc(collection(db, 'emails'), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date(),
    });

    dispatch(closeSendMessage());
  };
  return (
    <div className='sendmail'>
      <div className='sendmail-header'>
        <h3>New Message</h3>
        <Close
          className='sendmail-close'
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='To'
          {...register('to', { required: 'To is required!' })}
        />
        <ErrorMessage
          errors={errors}
          name='to'
          render={({ message }) => <p className='sendmail-error'>{message}</p>}
        />

        <input
          type='text'
          {...register('subject', { required: 'Subject is required!' })}
          placeholder='Subject'
        />
        <ErrorMessage
          errors={errors}
          name='subject'
          render={({ message }) => <p className='sendmail-error'>{message}</p>}
        />

        <input
          {...register('message', { required: 'Message is required!' })}
          type='text'
          placeholder='Message...'
          className='sendmail-message'
        />
        <ErrorMessage
          errors={errors}
          name='message'
          render={({ message }) => <p className='sendmail-error'>{message}</p>}
        />

        <div className='sendmail-options'>
          <Button
            className='sendmail-send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
