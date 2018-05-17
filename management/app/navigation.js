import Index from './pages/index';

import Student from './pages/Student/index';
import StudentPersonalInformation from './pages/Student/StudentPersonalInformation/index';
import Classmate from './pages/Student/Classmate/index';
import Announcement from './pages/Student/Announcement/index';
import AnnouncementContent from './pages/Student/Announcement/AnnouncementContent';
import Scores from './pages/Student/Scores/index';

import Teacher from './pages/Teacher/index';
import ManageClassInformation from './pages/Teacher/ManageClassInformation/index';
import TeacherPersonalInformation from './pages/Teacher/PersonalInformation/index';
import ReleaseAnnouncement from './pages/Teacher/ReleaseAnnouncement/index';
import ScoreEntry from './pages/Teacher/ScoreEntry/index';

import Register from './pages/Register';

const Navigations = {
  Main: { screen: Index },

  Student: { screen: Student },
  StudentPersonalInformation: { screen: StudentPersonalInformation },
  Classmate: { screen: Classmate },
  Announcement: { screen: Announcement },
  AnnouncementContent: { screen: AnnouncementContent },
  Scores: { screen: Scores },

  Teacher: { screen: Teacher },
  ManageClassInformation: { screen: ManageClassInformation },
  TeacherPersonalInformation: { screen: TeacherPersonalInformation },
  ReleaseAnnouncement: { screen: ReleaseAnnouncement },
  ScoreEntry: { screen: ScoreEntry },

  Register: { screen: Register },
};

export default Navigations;
