import React from 'react';
import { NavLink } from 'react-router-dom';
import './CourseNav.css';

function CourseNav() {
  return (
    <div className="course-nav">
      <NavLink to="/" exact activeClassName="active">All</NavLink>
      <NavLink to="/fullstack" activeClassName="active">Full Stack Development</NavLink>
      <NavLink to="/datascience" activeClassName="active">Data Science</NavLink>
      <NavLink to="/cybersecurity" activeClassName="active">Cyber Security</NavLink>
      <NavLink to="/career" activeClassName="active">Career</NavLink>
    </div>
  );
}

export default CourseNav;
