import React from 'react';
import { UserConsumer } from './UserContext';

class UserMenu extends React.Component {
  state = {
    menuVisible: false
  };

  avatarRef = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.hideMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideMenu);
  }

  hideMenu = e => {
    // Ignore clicks on the avatar
    // so that the menu can open
    if (e.target !== this.avatarRef.current) {
      this.setState({ menuVisible: false });
    }
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuVisible: !state.menuVisible
    }));
  };

  render() {
    return (
      <UserConsumer>
      {({user, onLogout})=>
      <div className="UserMenu">
        <img
          className="UserAvatar"
          alt="User avatar"
          src={user.avatar}
          onClick={this.toggleMenu}
          ref={this.avatarRef}
        />
        {this.state.menuVisible && (
          <ul>
            <li onClick={onLogout}>Logout</li>
          </ul>
        )}
      </div>}
      </UserConsumer>
    );
  }
}

export default UserMenu;


// React 16.6 allows us class components to access context without the consumer and render props pattern
// and on this page:

// import React from 'react';
// import { UserContext } from './UserContext';
//
// class UserMenu extends React.Component {
//   static contextType = User Context
//   state = {
//     menuVisible: false
//   };
//
//   avatarRef = React.createRef();
//
//   componentDidMount() {
//     document.addEventListener('click', this.hideMenu);
//   }
//
//   componentWillUnmount() {
//     document.removeEventListener('click', this.hideMenu);
//   }
//
//   hideMenu = e => {
//     // Ignore clicks on the avatar
//     // so that the menu can open
//     if (e.target !== this.avatarRef.current) {
//       this.setState({ menuVisible: false });
//     }
//   };
//
//   toggleMenu = () => {
//     this.setState(state => ({
//       menuVisible: !state.menuVisible
//     }));
//   };
//
//   render() {
//     const { user, onLogout } = this.context;
//     return (
      // <div className="UserMenu">
      //   <img
      //     className="UserAvatar"
      //     alt="User avatar"
      //     src={user.avatar}
      //     onClick={this.toggleMenu}
      //     ref={this.avatarRef}
      //   />
      //   {this.state.menuVisible && (
      //     <ul>
      //       <li onClick={onLogout}>Logout</li>
      //     </ul>
      //   )}
      // </div>
//     );
//   }
// }
//
// export default UserMenu;
//



// Some other things you can only use context on class components and only for one so if you're using 2+ contexts (like in MessageList) you can only pick one of those to use context for
