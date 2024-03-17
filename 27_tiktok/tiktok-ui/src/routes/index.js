import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

import { HeaderOnly } from '~/components/Layouts';

const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/following', component: FollowingPage },
  { path: '/profile', component: ProfilePage },
  { path: '/upload', component: UploadPage, layout: HeaderOnly },
  { path: '/search', component: SearchPage, layout: 'none' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
