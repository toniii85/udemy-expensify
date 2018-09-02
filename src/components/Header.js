import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>Panel</NavLink>
    <NavLink to="/create" activeClassName="is-active" >Crear gasto</NavLink>
    <NavLink to="/help" activeClassName="is-active" >Ayuda</NavLink>
  </header>
);

export default Header;