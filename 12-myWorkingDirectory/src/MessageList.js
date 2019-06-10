import React from 'react';
import {UserConsumer} from './UserContext';
import { EmailConsumer } from './EmailContext';

const MessageList = () => (
  <UserConsumer>
  {({user}) =>(
    <EmailConsumer>
    {({ loading, emails, onSelectEmail })=>(
      <div className="MessageList">
      {loading ?<div className="no-messages">Loading...</div>:
      emails.length === 0 ? <div className="no-messages">
        Your mailbox is empty, {user.firstName}! 🎉
      </div> :
      <ul>
        {emails.map(email =>
        <Email
          key={email.id}
          email={email}
          onClick={()=> onSelectEmail(email)}
         />)}
      </ul>
    }
    </div>)}
  </EmailConsumer>)}
  </UserConsumer>
);

const Email = ({ email, onClick }) => (
  <li onClick={onClick}>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
)

export default MessageList;



//This will give an error because a consumer expects a single function as a child

// <UserContext.Consumer>
// <div className="MessageList">
//   <div className="no-messages">
//     Your mailbox is empty, {currentUser.firstName}! 🎉
//   </div>
// </div>
// </UserContext.Consumer>
