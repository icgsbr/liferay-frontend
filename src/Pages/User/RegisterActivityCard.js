import React from "react";

function RegisterActivityCard(props) {
    const handlerStateCard = () => {
        alert('Click OK!');
    }

    return(
        <div className="card mb-3">
            <div className="row g-0" onClick={() => {handlerStateCard()}}>
                <div className="col-md-2">
                    <img className="img-fluid rounded-start" src={props.img} alt="image card"/>
                </div>
                <div className="col-md-4">
                    <div className="card-body card-body-activity">
                        <h5 className="card-title title-card-activity">{props.name}</h5>
                        <span className="card-text text-card-activity">{props.phone}</span><br/>
                        <span className="card-text text-card-activity">{props.city}</span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-body card-body-activity">
                        <h5 className="card-title title-card-activity">{props.activityValue}</h5>
                        <span className="card-text text-card-activity">{props.activityText}</span><br/>
                        <span className="card-text text-card-activity">{props.activityDate}</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body card-body-activity">
                        <div className="signal-state-reg-activity"></div>
                        <span className="card-text text-card-activity">{props.activityTitle}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterActivityCard;
