import React from "react";

import "./HomeSideBar.css";

function HomeSideBar(props) {
    return(
        <div className="home-sidebar-container">
            <div className="home-sidebar">
                <img src={props.avatar} alt="avatar" className="avatar-side-home"/><br/>
                <span className="name-side-home">{props.name}</span><br/>
                <span className="job-side-home">{props.job}</span>
                <h4 className="mg-top">{props.titleEvp}</h4>
                <h6 className="mg-top">{props.titleDonate}</h6>
                <span>{props.donateText}</span><br/>
                <span className="text-custom-value">{props.donateValue}</span>
                <h6 className="mg-top">{props.titleActivity}</h6>
                <span>{props.activityText}</span><br/>
                <span className="text-custom-value">{props.activityValue}</span>
                <h6 className="mg-top">{props.titleGoals}</h6>
                <span>{props.goalsText}</span><br/>
                <span className="text-custom-value">{props.goalsValue}</span>
                <div className="mg-top"></div>
                <span>{props.activityGoalsText}</span><br/>
                <span className="text-custom-value">{props.activityGoalsValue}</span>
            </div>
        </div>
    );
}

export default HomeSideBar;
