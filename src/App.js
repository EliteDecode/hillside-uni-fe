import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Academics from "./pages/Academics/Academics";
import About from "./pages/About/About";
import SingleCollege from "./pages/SingleCollege/SingleCollege";
import SingleSchool from "./pages/SingleSchool/SingleSchool";
import SingleDepartment from "./pages/SingleDepartment/SingleDepartment";
import NewsPage from "./pages/News/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import EventPage from "./pages/EventPage/EventPage";
import VissionMission from "./pages/VisionMissionPage/VissionMissionPage";
import ObjectivePage from "./pages/ObjectivePage/ObjectivePage";
import CoreValuesPage from "./pages/CoreValuesPage/CoreValuesPage";
import SchoolsAndColleges from "./pages/SchoolsAndColleges/SchoolsAndColleges";
import CalenderPage from "./pages/CalenderPage/CalenderPage";
import ProgrammesPage from "./pages/ProgrammesPage/ProgrammesPage";
import Resources from "./pages/Resources/Resources";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import IctPage from "./pages/IctPage/IctPage";
import HrPage from "./pages/HrPage/HrPage";
import StudentAffairsPage from "./pages/StudentAffairsPage/StudentAffairsPage";
import StudentLife from "./pages/StudentLife/StudentLife";
import ResidencePage from "./pages/ResidencePage/ResidencePage";
import SportPage from "./pages/Sports/SportPage";
import FoodPage from "./pages/FoodPage/FoodPage";
import SocialPage from "./pages/SocialsPage/SocialPage";
import Admission from "./pages/Admission/Admission";
import PublicInformation from "./pages/PublicInformation/PublicInformation";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import SingleNews from "./pages/SingleNews/SingleNews";
import SingleEvents from "./pages/SingleEvents/SingleEvents";
import Directors from "./pages/Directors/Directors";
import GoverningBody from "./pages/GoverningBody/GoverningBody";
import Managements from "./pages/Managements/Managements";
import AdvertPage from "./pages/AdvertPage/AdvertPage";

// import Admission from "./components/Admission";
// import StudentLife from "./components/StudentLife";
// import Updates from "./components/Updates";
// import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/gallery" element={<GalleryPage />} />
        <Route path="/home/news" element={<NewsPage />} />
        <Route path="/home/news/:newsId" element={<SingleNews />} />
        <Route path="/home/events" element={<EventPage />} />
        <Route path="/home/events/:eventId" element={<SingleEvents />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/vision&misson" element={<VissionMission />} />
        <Route path="/about/objectives" element={<ObjectivePage />} />
        <Route path="/about/corevalues" element={<CoreValuesPage />} />
        <Route path="/academics" element={<Academics />} />
        <Route
          path="/academics/colleges&schools"
          element={<SchoolsAndColleges />}
        />
        <Route path="/academics/calender" element={<CalenderPage />} />
        <Route path="/academics/programmes" element={<ProgrammesPage />} />

        <Route
          path="/academics/colleges/:college"
          element={<SingleCollege />}
        />
        <Route
          path="/Academics/colleges/college/schools/:school"
          element={<SingleSchool />}
        />
        <Route
          path="/Academics/colleges/college/schools/school/:department"
          element={<SingleDepartment />}
        />

        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/library" element={<LibraryPage />} />
        <Route path="/resources/ict" element={<IctPage />} />
        <Route path="/resources/hr" element={<HrPage />} />
        <Route
          path="/resources/studentAffairs"
          element={<StudentAffairsPage />}
        />
        <Route path="/student life" element={<StudentLife />} />
        <Route path="/student life/residence" element={<ResidencePage />} />
        <Route path="/student life/sports" element={<SportPage />} />
        <Route path="/student life/foodService" element={<FoodPage />} />
        <Route path="/student life/socials" element={<SocialPage />} />

        <Route path="/admission" element={<Admission />} />

        <Route path="/public information" element={<PublicInformation />} />
        <Route
          path="/Board of Directors/Board of Directors"
          element={<Directors />}
        />
        <Route
          path="/Board of Directors/Governing council"
          element={<GoverningBody />}
        />
        <Route
          path="/Board of Directors/Managements"
          element={<Managements />}
        />
        <Route path="/Public Information/Advert" element={<AdvertPage />} />
        <Route
          path="/careers"
          element={<Navigate to="/Public Information/Advert" replace />}
        />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
