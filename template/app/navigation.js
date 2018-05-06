
import { TabNavigator } from 'react-navigation';

import Bookcase from './pages/bookcase/index';
import Discovery from './pages/discovery/index';
import Mine from './pages/mine/index';

const BasicApp = TabNavigator({
  Bookcase: {
    screen: Bookcase,
  },
  Discovery: {
    screen: Discovery,
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
  Main: { screen: BasicApp },
};

export default Navigations;
