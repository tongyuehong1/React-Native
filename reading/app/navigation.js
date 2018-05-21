
import { TabNavigator } from 'react-navigation';

import Bookcase from './pages/bookcase/index';
import BookcaseFirst from './pages/bookcase/Components/First';

import Classification from './pages/classification/index';
import Search from './pages/classification/Search';
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
  BookcaseFirst: { screen: BookcaseFirst },
  Search: { screen: Search },
};

export default Navigations;
