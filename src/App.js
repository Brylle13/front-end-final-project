import React from 'react';
import Users from './components/component-users/Users';
import { useSelector } from 'react-redux';
import Login from './components/component-login-logout/Login';
import Layout from './components/Layout';
//css
import './App.css';

export default function App() {
  const token = useSelector((state) => state.login.token);

  return <Layout>{token === null || !token ? <Login /> : <Users />}</Layout>;
}
