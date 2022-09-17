import React from 'react';
import { NavLink } from 'react-router-dom';

const Hello = () => (
  <div>
    <h1>
      <NavLink to="/greet">Generate greeting</NavLink>
    </h1>
  </div>
);

export default Hello;
