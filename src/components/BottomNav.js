import React from 'react';
import {
  Link,
} from 'react-router-dom';

const BottomNav = () => (
  <div>
    <Link to="/activity">Activity</Link>
    <Link to="/archive">Archive</Link>
  </div>
);

export default BottomNav;
