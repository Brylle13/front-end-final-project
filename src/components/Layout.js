import React from 'react';
import Footer from './footer/Footer';
import Nav from './nav/Nav';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
