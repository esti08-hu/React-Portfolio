import React from "react"
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Project from "./components/Projects/Project";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Education from "./components/Education/Education";
import Testimonial from "./components/Testimaonal/Testimonial";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css"
import NavbarMobileView from "./components/Sidebar/NavbarMobileView";


const App = () => {
  return (
    <>
      <NavbarMobileView/>
      <Sidebar />
      <About />
      <TechStack />
      <Project />
      <WorkExperience />
      <Education />
      <Testimonial />
      <Contact />
      <ScrollToTop smooth={true}
      color="white"
      height="20"
      width="20"
        style={{display: "flex", alignItems: "center", justifyContent: "center" , backgroundColor: "black", borderRadius: "50%"}}
      />
    </>
  );
}

export default App;
