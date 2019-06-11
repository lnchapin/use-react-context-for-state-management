import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { EmailContext } from './EmailContext';

const MessageList = () => {
  const { user } = useContext(UserContext)
  const { loading, emails, onSelectEmail }= useContext(EmailContext)
  return (
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
          onClick={onSelectEmail}
         />)}
      </ul>
    }
    </div>
)
};

const Email = React.memo(({ email, onClick }) => (
  <li onClick={()=>onClick(email)}>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
))

export default MessageList;



//This will give an error because a consumer expects a single function as a child

// <UserContext.Consumer>
// <div className="MessageList">
//   <div className="no-messages">
//     Your mailbox is empty, {currentUser.firstName}! 🎉
//   </div>
// </div>
// </UserContext.Consumer>
