import React from "react";

import "./InstitutionCard.css";

function InstitutionCard(props) {
    const handlerStateCard = () => {
        alert('Click OK!');
    }

    return(
        <div className="card mb-3">
            <div className="row g-0" onClick={() => {handlerStateCard()}}>
                <div className="col-md-2">
                    <img className="img-fluid rounded-start" src={props.img} alt="image card"/>
                </div>
                <div className="col-md-6">
                    <div className="card-body card-body-institute">
                        <h5 className="card-title title-card-institute">{props.name}</h5>
                        <span className="card-text text-card-institute">{props.phone}</span><br/>
                        <span className="card-text text-card-institute">{props.email}</span><br/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-body card-body-institute">
                        <h5 className="card-title title-card-institute">{props.donateds}</h5>
                        <span className="card-text text-card-institute">{props.titledonate}</span><br/>
                        <span className="card-text text-card-institute">{props.instdate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstitutionCard;