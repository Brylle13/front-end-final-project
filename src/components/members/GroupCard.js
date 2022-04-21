import React from 'react';
// css
import './css/groupCard.css';

export default function Card({ ...list }) {
  const { id, name, contributions } = list;
  return (
    <section className='group-card-container'>
      <div>
        <h3>{name}</h3>
        <small style={{ opacity: '0.7', fontSize: '.7rem' }}>
          member: {id}
        </small>
        <article style={{ padding: '.5rem 0' }}>
          <small>{contributions}</small>
        </article>
      </div>
    </section>
  );
}
