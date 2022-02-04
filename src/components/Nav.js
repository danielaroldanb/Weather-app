import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Nav.module.css"

function Nav() {
  return <nav className={styles.nav} >
       <NavLink className={styles.navLink} to="/about">About</NavLink>
  </nav>;
}

export default Nav;
