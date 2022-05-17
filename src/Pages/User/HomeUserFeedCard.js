import React from "react";

function HomeUserFeedCard(props) {
    const handlerDetailFeedCard = () => {
        alert('Click OK!');
    }

    return(
        <div className="card mb-3">
            <div className="row g-0" onClick={() => {handlerDetailFeedCard()}}>
                <div className="col-md-2">
                    <img className="img-fluid rounded-start" src={props.img} alt="image card"/>
                </div>
                <div className="col-md-6">
                    <div className="card-body card-body-home">
                        <h5 className="card-title title-card-home">{props.nameinst}</h5>
                        <span className="card-text text-card-home">{props.dateinst}</span><br/>
                        <span className="card-text text-card-home">{props.localeinst}</span><br/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-body card-body-home">
                        <img className="avatar-card avatar-card-home" src={props.avatar} alt="avatar"/><br/>
                        <h5 className="card-title title-card-home">{props.username}</h5>
                        <span className="card-text text-card-home">{props.userjob}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeUserFeedCard;
