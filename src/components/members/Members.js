import React from 'react';
import GroupCards from './GroupCards';
// css
import './css/groupCards.css';
import MembersNav from './nav/MembersNav';

export default function AboutUsPage() {
  return (
    <div
      style={{
        height: 'auto',
        width: '70vw',
        margin: '10% auto',
        borderRadius: '1rem',
        boxShadow: ' 5px 5px 15px  #777 ',
        background: 'linear-gradient(#e66465, #9198e5)',
      }}
    >
      <MembersNav />
      <h1 style={{ textAlign: 'center', padding: '3%' }}>
        Group 777 Project for CPAN-144
      </h1>
      <h2 style={{ textAlign: 'center' }}>Members</h2>
      <div className='group-cards-container'>
        <GroupCards />
      </div>
    </div>
  );
}
