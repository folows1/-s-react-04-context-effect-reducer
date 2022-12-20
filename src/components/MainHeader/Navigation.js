import React from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  const context = React.useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

// CONTEXT CONSUMER

// const Navigation = (props) => {
//   return (
//     <AuthContext.Consumer>
//       {(context) => {
//         return (
//           <nav className={classes.nav}>
//             <ul>
//               {context.isLoggedIn && (
//                 <li>
//                   <a href="/">Users</a>
//                 </li>
//               )}
//               {context.isLoggedIn && (
//                 <li>
//                   <a href="/">Admin</a>
//                 </li>
//               )}
//               {context.isLoggedIn && (
//                 <li>
//                   <button onClick={props.onLogout}>Logout</button>
//                 </li>
//               )}
//             </ul>
//           </nav>
//         )
//       }}
//     </AuthContext.Consumer>
//   );
// };
