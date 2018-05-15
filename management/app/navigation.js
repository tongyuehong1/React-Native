import Index from './pages/index';

import Student from './pages/Student/index';
import Mine from './pages/Student/Mine/index';
import Classmate from './pages/Student/Classmate/index';
import Announcement from './pages/Student/Announcement/index';
import AnnouncementContent from './pages/Student/Announcement/AnnouncementContent';
import Results from './pages/Student/Results/index';

import Teacher from './pages/Teacher/index';

import Register from './pages/Register';

const Navigations = {
  Main: { screen: Index },

  Student: { screen: Student },
  Mine: { screen: Mine },
  Classmate: { screen: Classmate },
  Announcement: { screen: Announcement },
  AnnouncementContent: { screen: AnnouncementContent },
  Results: { screen: Results },

  Teacher: { screen: Teacher },

  Register: { screen: Register },
};

export default Navigations;
