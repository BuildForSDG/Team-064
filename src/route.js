import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/CustomerDashboard'));
const About = React.lazy(() => import('./views/Customer/About'));
const Donate = React.lazy(() => import('./views/Customer/Donate'));
const History = React.lazy(() => import('./views/Customer/History'));
const MyAccount = React.lazy(() => import('./views/Customer/MyAccount'));
const Order = React.lazy(() => import('./views/Customer/Order'));
const Support = React.lazy(() => import('./views/Customer/Support'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {
    path: '/dashboard/about',
    exact: true,
    name: 'Theme',
    component: About
  },
  { path: '/dashboard/donate', name: 'Colors', component: Donate },
  { path: '/dashboard/history', name: 'Typography', component: History },
  {
    path: '/daashboard/myaccout',
    exact: true,
    name: 'Base',
    component: MyAccount
  },
  { path: '/dashboard/order', name: 'Cards', component: Order },
  { path: '/dashboard/support', name: 'Cards', component: Support }
];

export default routes;
