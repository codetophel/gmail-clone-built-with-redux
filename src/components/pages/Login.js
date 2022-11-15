import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { provider, auth } from '../../db/firebase';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((user) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className='login'>
      <div className='login-container'>
        <img src='https://cdn.cdnlogo.com/logos/g/56/gmail.png' alt='' />
        <Button variant='contained' color='primary' onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
