import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Personal from "./component/Personal";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Extra from "./component/Extra";
import Download from "./component/Download";

function Routing() {
  let [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phnumber: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    college: "",
    date1: "",
    date2: "",
    qualification1: "",
    desc1: "",
    school: "",
    date3: "",
    date4: "",
    desc2: "",
    title1: "",
    link1: "",
    desc3: "",
    title2: "",
    link2: "",
    desc4: "",
    institute1: "",
    position1: "",
    duration1: "",
    desc5: "",
    institute2: "",
    position2: "",
    duration2: "",
    desc6: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
  });

  return (
    <div>
      <Router>
        <Link to="/" />
        <Link to="/Education" />
        <Link to="/Projects" />
        <Link to="/Experience" />
        <Link to="/Extra" />
        <Link to="/Show" />
        <Route exact path="/">
          <Personal sample={[values, setValues]} />{" "}
        </Route>
        <Route path="/Education">
          <Education sample={[values, setValues]} />{" "}
        </Route>
        <Route path="/Projects">
          <Projects sample={[values, setValues]} />
        </Route>
        <Route path="/Experience">
          <Experience sample={[values, setValues]} />
        </Route>
        <Route path="/Extra">
          <Extra sample={[values, setValues]} />
        </Route>
        <Route path="/Show">
          <Download values={values} />
        </Route>
      </Router>
    </div>
  );
}

export default Routing;
