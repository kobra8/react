import React from 'react';
import authHelper from '../helpers/AuthHelper';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }
  onLoginClick(event) {
    authHelper.authenticate(()=>{ //do funkcji authenticate przekazujemy jako argument funkcję (callback) która w body ustawia stan redirect na true
      this.setState({ redirect: true });
    })
  }

render(){
  if(this.state.redirect) {
    return <Redirect to="/settings" />
  }
  return (
      <div>
        <h2>Ekran logowania</h2>
        <button onClick={this.onLoginClick.bind(this)}>Zaloguj</button>
      </div>
  )
}
}

export default Login;