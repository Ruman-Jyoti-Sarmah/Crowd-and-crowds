import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
    visible: true
  },
  {
    name: 'Menu',
    path: '/menu',
    element: <Menu />,
    visible: true
  },
  {
    name: 'Order',
    path: '/order',
    element: <Order />,
    visible: true
  },
  {
    name: 'Team',
    path: '/team',
    element: <Team />,
    visible: true
  },
  {
    name: 'Gallery',
    path: '/gallery',
    element: <Gallery />,
    visible: true
  },
  {
    name: 'About',
    path: '/about',
    element: <About />,
    visible: true
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />,
    visible: true
  }
];

export default routes;
