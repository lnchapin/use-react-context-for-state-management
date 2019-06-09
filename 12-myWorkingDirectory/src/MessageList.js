import React from 'react';
import {UserConsumer} from './UserContext';

const MessageList = () => (
  <UserConsumer>
  {({user}) =>
    <div className="MessageList">
      <div className="no-messages">
        Your mailbox is empty, {user.firstName}! 🎉
      </div>
    </div>}
  </UserConsumer>
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
