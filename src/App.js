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
import NewsPage from "./pages/News/News";

// import Admission from "./components/Admission";
// import Resources from "./components/Resources";
// import StudentLife from "./components/StudentLife";
// import Updates from "./components/Updates";
// import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/academics" element={<Academics />} />
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
      </Routes>
    </Router>
  );
};

export default App;
