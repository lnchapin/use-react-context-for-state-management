import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserConsumer, UserProvider } from './UserContext'
import { EmailProvider } from './EmailContext'
import './index.css';

function Root() {
  return (
    <UserProvider>
      <EmailProvider>
        <UserConsumer>
        {({user})=>
          user ? (<MainPage />) : (<LoginPage />)}
        </UserConsumer>
      </EmailProvider>
    </UserProvider>
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
// <UserProvider>
// <EmailProvider>
// <Root />
// </EmailProvider>
// </UserProvider>,
// document.querySelector('#root'));

// this maybe easier for later refactoring
