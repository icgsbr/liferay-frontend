import React from "react";
import {NavLink} from "react-router-dom";

import "../LayoutRH/HeaderRH";
import logo from "./../../images/ic_liferay_white.png";

function HeaderRH() {
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
                                    <NavLink className="nav-link" to="/admin">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Solicitações</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Relatórios</NavLink>
                                </li>
                            </ul>
                        </div>
                        <NavLink className="nav-link" to="/">Sair</NavLink>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default HeaderRH;