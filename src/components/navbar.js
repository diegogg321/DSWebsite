import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
  return(
    <div className="nav-links">
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to="/about" >About</NavLink>
      
     
      <NavLink to="/analysis" >Analysis</NavLink>
      <NavLink to="/advanced" >Advanced Analysis</NavLink>
      <NavLink to="/biomedical" >Biomedical Data Science</NavLink>
      <NavLink to="/economics" >Health Economics</NavLink>
      <NavLink to="/contact" >Contact</NavLink>
      <NavLink to="/blog" >Blog</NavLink>
    </div>
  );
}