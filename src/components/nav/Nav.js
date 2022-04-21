import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//css
import '../../styles/nav.css';

export default function Nav() {
  const token = useSelector((state) => state.login.token);

  return (
    <nav className='nav-container'>
      <Link to='/' className='nav-link home'>
        <small>
          <b>Group 777</b>
        </small>
      </Link>
      <Link
        to='/members'
        className='nav-link members'
        style={{ backgroundColor: token ? '#02aabd' : '' }}
      >
        <small>members</small>
      </Link>
    </nav>
  );
}
