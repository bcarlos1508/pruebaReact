
import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./navBar.css?inline";

const NavBar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className={styles.container}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Home</p>
      </NavLink>
      <NavLink
        to="productos"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Productos</p>
      </NavLink>
    </nav>
  );
}

export default NavBar;