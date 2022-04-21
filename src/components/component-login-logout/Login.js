import React from 'react';
import { useDispatch } from 'react-redux';
import { loginToApp } from '../../features/loginSlice';
//css
import '../../styles/login.css';

export default function Login() {
  //redux-related
  const dispatch = useDispatch();

  //credentials states
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });
  //destruct credentials
  const { email, password } = credentials;

  //onChange
  const onChange = (e) => {
    const keys = e.target.name;
    const values = e.target.value;
    setCredentials({ ...credentials, [keys]: values });
  };

  //login button
  const loginSubmit = function (e) {
    e.preventDefault();
    dispatch(loginToApp({ email, password }));
    setCredentials({ ...credentials, email: '', password: '' });
  };

  //rendering components
  const renderTitle = () => (
    <input id='input-title' type='text' value='login' disabled />
  );

  const renderEmail = () => (
    <input
      id='email-input'
      className='inputs-creds email-input'
      onChange={onChange}
      value={email}
      type='text'
      name='email'
      placeholder='email'
    />
  );

  const renderPassword = () => (
    <input
      id='password-input'
      className='inputs-creds'
      onChange={onChange}
      value={password}
      type='password'
      name='password'
      placeholder='password'
    />
  );

  const renderButton = () => (
    <button
      style={{
        opacity: !email || !password ? '0' : '1',
        transform: !email || !password ? 'scale(0)' : 'scale(1)',
        transition: '0.2s ease-in-out',
      }}
      className='submit-button'
    >
      login
    </button>
  );

  return (
    <>
      <form
        className='columns is-vcentered is-flex-direction-column'
        onSubmit={loginSubmit}
      >
        <main className='login-container'>
          <section>{renderTitle()}</section>
          <section>{renderEmail()}</section>
          <section>{renderPassword()}</section>
          <section>{renderButton()}</section>
        </main>
      </form>
    </>
  );
}
