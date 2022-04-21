import React from 'react';
import { Link } from 'react-router-dom';
//css
import '../css/memberNav.css';

export default function membwcers_nav() {
  return (
    <nav style={{ position: 'absolute', top: '1rem' }}>
      <Link to='/' className='member-nav'>
        Home
      </Link>
    </nav>
  );
}
