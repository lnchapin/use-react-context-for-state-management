import React, { Component } from 'react';
import { FAKE_USER } from './api';

// const Context = React.createContext();
//returns an object with 2 properties Context.consumer and Context.provider

// to centralize our provider. This gives us one class holds all the concerns for users and the root component(index.js) doesn't need to worry about it and it becomes a stateless component

//11.03

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
  state = {
    currentUser: FAKE_USER
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return(
      <Provider value={{
        user: this.state.currentUser,
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      }}>{this.props.children}</Provider>
    )
  }
}





export {UserProvider, Consumer as UserConsumer};
