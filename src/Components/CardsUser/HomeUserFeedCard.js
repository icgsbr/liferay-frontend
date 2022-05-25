import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./HomeUserFeedCard.css";
import { DonateContext } from "../Details/DonateDetailContext"

function HomeUserFeedCard(props) {
    const { value, setValue } = useContext(DonateContext);

    const navigate = useNavigate();
    const handleUseCallback = useCallback(() => navigate('/donatedetail', { replace: true }), [navigate]);

    function addDetailContext() {
        setValue(props.id);
        handleUseCallback();
    }

    return (
        <div key={props.id} className="card mb-3">
            <div className="row g-0 card-body-home" onClick={() => addDetailContext()}>
                <div className="col-md-2">
                    <img className="img-fluid img-top-home-card" src={props.img} alt="image card" />
                </div>
                <div className="col-md-4">
                    <div className="card-body card-body-home-institution">
                        <h5 className="card-title title-card-home-institution">{props.nameinst}</h5>
                        <span className="card-text text-card-home-institution">{props.phone}</span><br />
                        <span className="card-text text-card-home-institution">{props.email}</span><br />
                        <span className="card-text text-card-home-institution">{props.street} - {props.city}</span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-body card-body-home-user">
                        <img className="avatar-card avatar-card-home-user" src={props.avatar} alt="avatar" />
                        <h5 className="card-title title-card-home-user">{props.username}</h5>
                        <span className="card-text text-card-home-user">{props.userjob}</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body card-body-home-institution">
                        <span className="card-text text-card-register-activity">{props.donatedate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeUserFeedCard;
