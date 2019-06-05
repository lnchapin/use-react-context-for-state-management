import React from 'react';
import UserContext from './UserContext';

const MessageList = () => (
  <UserContext.Consumer>
  {(user) =>
    <div className="MessageList">
      <div className="no-messages">
        Your mailbox is empty, {user.firstName}! 🎉
      </div>
    </div>}
  </UserContext.Consumer>
);

export default MessageList;



//This will give an error because a consumer expects a single function as a child

// <UserContext.Consumer>
// <div className="MessageList">
//   <div className="no-messages">
//     Your mailbox is empty, {currentUser.firstName}! 🎉
//   </div>
// </div>
// </UserContext.Consumer>
