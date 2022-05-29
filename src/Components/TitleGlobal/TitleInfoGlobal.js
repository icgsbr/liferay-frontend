import React from "react";

import "./TitleInfoGlobal.css";

function TitleInfoGlobal(props) {
    var mdate = new Date();

    return(
        <div className="title-global-container">
            <div className="col title-global-style">
                <h5 >{props.titleevpmain}</h5>
                <p className="title-global-style-year"> EVP {mdate.getFullYear()}</p>
            </div>
            <div className="col info-global-container">
                <span className="title-info-global info-global-style">{props.titledonateglobal}</span>
                <span className="info-global-style">{props.titledonatevalor}</span>
                <span className="info-global info-global-style">{props.donatevalue}</span>
                <span className="info-global-style">{props.titledonatemeta}</span>
                <span className="info-global info-global-style">{props.donatemeta}</span>
                <span className="title-info-global info-global-style">/</span>
                <span className="title-info-global info-global-style">{props.titleactivityglobal}</span>
                <span className="info-global-style">{props.titleactivityvalor}</span>
                <span className="info-global info-global-style">{props.activityvalue}</span>
                <span className="info-global-style">{props.titleactivitymeta}</span>
                <span className="info-global info-global-style">{props.activitymeta}</span>
            </div>
        </div>
    );
}

export default TitleInfoGlobal;
