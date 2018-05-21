import { TabNavigator } from 'react-navigation';

import Discovery from './pages/Discovery/index';
import Notifications from './pages/Discovery/Components/Notifications';
import Search from './pages/Discovery/Components/Search';
import Classic from './pages/Discovery/SlideBar/Classic';
import Album from './pages/TheAlbum/index';
import Community from './pages/Community/index';
import Settings from './pages/Settings/index';

const Tabs = TabNavigator({
  Discovery: {
    screen: Discovery,
  },
  Learning: {
    screen: Album,
  },
  Community: {
    screen: Community,
  },
  Settings: {
    screen: Settings,
  },
}, {
  initialRouteName: 'Discovery',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  lazy: true,
});

const Navigations = {
  Main: { screen: Tabs },
  Notifications: { screen: Notifications },
  Search: { screen: Search },
  Classic: { screen: Classic },
};

export default Navigations;
