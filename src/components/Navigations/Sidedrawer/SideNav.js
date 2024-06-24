// // eslint-disable-next-line no-unused-vars
// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

// class SideNav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activePath: props.location.pathname,
//       items: [
//         {
//           /* path is used as id to check which NavItem is active basically */
//           path: '/myaccount',
//           name: 'myaccount',
//           /* Key is required, else console throws error. Does this please you Mr. Browser?! */
//           key: 1
//         },
//         {
//           path: '/order',
//           name: 'order',
//           key: 2
//         },
//         {
//           path: '/donate',
//           name: 'donate',
//           key: 3
//         },
//         {
//           path: '/history',
//           name: 'history',
//           key: 3
//         },
//         {
//           path: '/support',
//           name: 'support',
//           key: 3
//         },
//         {
//           path: '/about',
//           name: 'about',
//           key: 3
//         }
//       ]
//     };
//   }

//   onItemClick = (path) => {
//     /* Sets activePath which causes rerender which causes CSS to change */
//     this.setState({ activePath: path });
//   };

//   render() {
//     return (
//       <Col className="w-25">
//         {
//           /* items = just array AND map() loops thru that array AND item is param of that loop */
//           items.map((item) => (
//             /* Return however many NavItems in array to be rendered */
//             <NavItem
//               path={item.path}
//               name={item.name}
//               onItemClick={this.onItemClick}
//               /* Simply passed an entire function to onClick prop */

//               active={item.path === activePath}
//               key={item.key}
//             />
//           ))
//         }
//       </Col>
//     );
//   }
// }

// export default withRouter(SideNav);
