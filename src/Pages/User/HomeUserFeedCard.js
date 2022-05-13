import React from "react";

import "./HomeUserFeedCard.css";

function HomeUserFeedCard(props) {
    return(
        <div className="homeUserFeedContainer">
            <div className="card mb-3">
                <img className="card-img-top img-fluid" src={props.img} alt="imagem"/>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <div className="card-avatar-name-container">
                                <img className="avatar-card avatar-user-home-feed" src={props.avatar} alt="avatar"/><br/>
                                <span  className="text-home-feed-style">{props.username}</span>
                            </div>
                            <span id="job-user-home-feed">{props.userjob}</span>
                        </div>
                        <div className="col card-institute-info-containner">
                            <span className="text-home-feed-style">{props.nameinst}</span><br/>
                            <span id="date-inst-home-feed">{props.dateinst}</span><br/>
                            <span>{props.localeinst}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeUserFeedCard;
