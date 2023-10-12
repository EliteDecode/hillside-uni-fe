import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
        <Route path="/home/events" element={<EventPage />} />
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
      </Routes>
    </Router>
  );
};

export default App;
