import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

import "./HeaderUser.css";
import logo from "./../../images/ic_liferay_white.png";
import PopupMenuForm from "../PopupMenuUser/PopupMenuForm";

function HeaderUser() {
    const [isShowing, setShowing] = useState();
    
    function handlePopupForm() {
        const popupMenuFormContainer = document.getElementsByClassName("popup-menu-form-container")[0];

        if (!isShowing) {
            setShowing(true);
            popupMenuFormContainer.style.display = "block";

            setTimeout(function() {
                setShowing(false);
                popupMenuFormContainer.style.display = "none";
            }, 3000)
        } else {
            setShowing(false);
            popupMenuFormContainer.style.display = "none";
        }
    }

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
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/registeractivity">Registro de Atividades</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/institution">Instituições</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="" onClick={handlePopupForm}>Formulários</NavLink>
                                    <PopupMenuForm />
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

export default HeaderUser;
