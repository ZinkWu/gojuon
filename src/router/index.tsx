import { RouteObject } from 'react-router-dom';
import Practice from '../pages/Practice';
import Config from '../pages/Config';

const routes: RouteObject[] = [
  {
    path: '/',
    Component: Config
  },
  {
    path: 'practice',
    Component: Practice
  },
]



export default routes

