import React, { Component } from 'react';
import { FAKE_USER } from './api';

// const Context = React.createContext();
//returns an object with 2 properties Context.consumer and Context.provider

// to centralize our provider. This gives us one class holds all the concerns for users and the root component(index.js) doesn't need to worry about it and it becomes a stateless component

//11.03
let UserContext;
const { Provider, Consumer } = UserContext = React.createContext();

class UserProvider extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: FAKE_USER,
      onLogin: this.handleLogin,
      onLogout: this.handleLogout
    };
  }


  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return(
      <Provider value={this.state}>{this.props.children}</Provider>
    )
  }
}





export {UserProvider, Consumer as UserConsumer, UserContext };
