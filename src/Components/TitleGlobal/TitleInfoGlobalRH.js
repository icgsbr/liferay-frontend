import React from "react";

import "./TitleInfoGlobal.css";

function TitleInfoGlobalRH(props) {
    const mdate = new Date();
    return(
        <div className="title-global-container">
            <div className="col title-global-style">
                <h5 >{props.titleevpmain}</h5>
                <p className="title-global-style-year"> EVP {mdate.getFullYear()}</p>
            </div>
        </div>
    );
}

export default TitleInfoGlobalRH;
