import React, { useContext } from "react";

import "./InstitutionDetail.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import { ModelContext } from "../../Components/ModelContext";
import homeUserFeedInfo from "../../Infos/home-user-feed-info";
import institutionInfo from "../../Infos/institution-info";
import sidebarInfo from "../../Infos/sidebar-info";
import InstitutionDetailCard from "../../Components/CardsUser/InstitutionDetailCard";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "./../../Components/layout/Footer";

function InstitutionDetail() {
    const mdate = new Date();
    const {context, setContext} = useContext(ModelContext);

    return(
        <div className="institute-detail-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 institute-detail-center-container">
                        <div className="institute-detail-card-container">
                            {
                                <InstitutionDetailCard
                                    id={homeUserFeedInfo[context].id}
                                    img={homeUserFeedInfo[context].img}
                                    avatar={homeUserFeedInfo[context].avatar}
                                    username={homeUserFeedInfo[context].username}
                                    userjob={homeUserFeedInfo[context].userjob}
                                    nameinst={homeUserFeedInfo[context].nameinst}
                                    dateinst={homeUserFeedInfo[context].dateinst}
                                    phone={institutionInfo[context].phone}
                                    email={institutionInfo[context].email}
                                    street={institutionInfo[context].street}
                                    city={institutionInfo[context].city}
                                    instdate={institutionInfo[context].instdate}
                                    titledonate={institutionInfo[context].titledonate}
                                    donateds={institutionInfo[context].donateds}
                                />
                            }
                        </div>
                    </div>
                    <div className="col-md-2 institute-detail-card-sidebar-right">
                        <div className="institute-detail-card-sidebar-container">
                            {sidebarInfo.map((info) =>
                                <SidebarHomeUser
                                    avatar={info.avatar}
                                    name={info.name}
                                    job={info.job}
                                    titleEvpYear={info.titleEvpYear +" "+ mdate.getFullYear()}
                                    titleDonate={info.titleDonate}
                                    donateValue={info.donateValue}
                                    donateMax={info.donateMax}
                                    titleActivity = {info.titleActivity}
                                    activityValue={info.activityValue}
                                    activityMax={info.activityMax}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default InstitutionDetail;