import React from "react";
import {NavLink} from "react-router-dom";

import "./HeaderUser.css";
import logo from "./../../images/ic_liferay_white.png";

function Navbar() {
    return (
        <div className="header-user-container">
            <header className="header-user">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="link-icon-liferay-header-use" to="/">
                            <img id="icon-liferay-header-use" src={logo} alt="icon"/>
                        </NavLink>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/registeractivity">Registro de Atividades</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/instituitions">Instituições</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/forms">Formulários</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/admin">Administrador</NavLink>
                                </li>
                            </ul>
                        </div>
                        <NavLink className="nav-link" to="/">Sair</NavLink>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
