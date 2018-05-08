
import { TabNavigator } from 'react-navigation';

import Bookcase from './pages/bookcase/index';
import Classification from './pages/classification/index';
import Mine from './pages/mine/index';

const Tabs = TabNavigator({
  Bookcase: {
    screen: Bookcase,
  },
  Classification: {
    screen: Classification,
  },
  Mine: {
    screen: Mine,
  },
}, {
  initialRouteName: 'Bookcase',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  lazy: true,
});

const Navigations = {
  Main: { screen: Tabs },
};

export default Navigations;
