import React from 'react';
import authHelper from '../helpers/AuthHelper';
import { Redirect } from 'react-router-dom';

const Settings = () => {
  if (authHelper.isAuthenticated ) {
    return (
      <div><h2>Settings - zalogowano użytkownika.</h2></div>
    )
  }
  return <Redirect to="/login" />
}

export default Settings;