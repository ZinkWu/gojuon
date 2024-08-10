import { RouteObject } from 'react-router-dom';
import Practice from '../pages/Practice';
import Config from '../pages/Config';
import PlayAudio from '../pages/PlayAudio';

const routes: RouteObject[] = [
  {
    path: '/',
    Component: Config
  },
  {
    path: 'practice',
    Component: Practice
  },
  {
    path: 'play-audio',
    Component: PlayAudio
  }
]



export default routes

