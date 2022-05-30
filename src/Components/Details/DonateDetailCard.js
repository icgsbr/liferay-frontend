import React from "react";
import { Link } from "react-router-dom";

import "./DonateDetailCard.css";

function DonateDetailCard(props) {
    return (
        <div key={props.id} className="card mb-3">
            <img className="img-fluid card-img-top card-img-top-donate-detail" src={props.img} alt="image card" />
            <div className="card-body card-body-donate-detail">
                <div className="card mb-3 card-body-main-donate-detail">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body card-donate-detail-institute">
                                <h5 className="card-title title-card-donate-detail">{props.nameinst}</h5>
                                <span className="card-text text-card-donate-detail">{props.phone}</span><br />
                                <span className="card-text text-card-donate-detail">{props.email}</span><br />
                                <span className="card-text text-card-donate-detail">{props.street} - {props.city}</span><br />
                                <span className="card-text text-card-donate-detail">{props.titledonate} - {props.donateds}</span><br />
                                <span className="card-text text-card-donate-detail">{props.initdate}</span><br />
                                <Link className="btn btn-primary button-site-donate-detail" to={"/donatedetail"}>Site</Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-body card-donate-detail-user">
                                <img className="avatar-card avatar-card-donate-detail" src={props.avatar} alt="avatar" />
                                <h5 className="card-title title-card-donate-detail">{props.username}</h5>
                                <span className="card-text text-card-donate-detail">{props.userjob}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonateDetailCard;
