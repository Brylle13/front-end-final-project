import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAccount } from '../../features/loginSlice';
//css
import '../../styles/logout.css';

export default function LogOut() {
  //redux-related
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);

  //logout button
  const logout = () => dispatch(logoutAccount(!token));

  //render logout
  const renderLogout = () => {
    return (
      <button className='render-logout' onClick={logout}>
        logout{' '}
        <i
          className='fa fa-sign-out'
          style={{ padding: '0 0 0 .3rem', fontSize: '18px' }}
        ></i>
      </button>
    );
  };

  return (
    <main>
      <section>{renderLogout()}</section>
    </main>
  );
}
