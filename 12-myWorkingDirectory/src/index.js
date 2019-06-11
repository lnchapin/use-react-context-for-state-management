import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserConsumer, UserProvider } from './UserContext'
import { EmailProvider } from './EmailContext'
import { NotificationProvider } from './NotificationContext'
import './index.css';


function Root() {
  return (
    <NotificationProvider>
    <UserProvider>
      <EmailProvider>
        <UserConsumer>
        {({user})=>
          user ? (<MainPage />) : (<LoginPage />)}
        </UserConsumer>
      </EmailProvider>
    </UserProvider>
  </NotificationProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'));



// Another option would be to move the UserProvider out to the top level so it would be:
// function Root() {
//   return (
//       <UserConsumer>
//       {({user})=>
//         user ? (<MainPage />) : (<LoginPage />)}
//       </UserConsumer>
//   )
// }
//
// ReactDOM.render(
// <NotificationProvider>
// <UserProvider>
// <EmailProvider>
// <Root />
// </EmailProvider>
// </UserProvider>
// </NotificationProvider>,
// document.querySelector('#root'));

// this maybe easier for later refactoring
