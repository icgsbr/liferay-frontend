import React from "react";

import "./TitleInfoGlobal.css";

function TitleInfoGlobal(props) {
    return(
        <div className="titleInfoGlobalContainer">
            <div className="container">
                <div className="row title-evp-main-container">
                    <div className="col">
                        <p>{props.titleevpmain}</p>
                    </div>
                </div>
                <div className="row info-global-container">
                    <div className="col info-global-left-container">
                        <span className="title-info-global info-global-style">{props.titledonateglobal}</span>
                        <span className="info-global-style">{props.titledonatevalor}</span>
                        <span className="info-global info-global-style">{props.donatevalue}</span>
                        <span className="info-global-style">{props.titledonatemeta}</span>
                        <span className="info-global info-global-style">{props.donatemeta}</span>
                    </div>
                    <div className="col info-global-right-container">
                        <span className="title-info-global info-global-style">{props.titleactivityglobal}</span>
                        <span className="info-global-style">{props.titleactivityvalor}</span>
                        <span className="info-global info-global-style">{props.activityvalue}</span>
                        <span className="info-global-style">{props.titleactivitymeta}</span>
                        <span className="info-global info-global-style">{props.activitymeta}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleInfoGlobal;
