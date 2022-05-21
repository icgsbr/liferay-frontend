import React, { useContext } from "react";

import "./DonateDetail.css";

import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import homeUserFeedContent from "../../home-user-feed-info";
import DonateDetailCard from "./DonateDetailCard";
import { DonateContext } from "./DonateDetailContext";
import sidebarInfo from "../../sidebar-info";
import UserSideBar from "./UserSideBar";
import Footer from "../../Components/layout/Footer";

function DonateDetail() {
    const mdate = new Date();
    const { value, setValue } = useContext(DonateContext);

    return (
        <div className="donate-detail-container overflow-scroll">
            <HeaderUser />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar-left-donate-detail">
                    </div>
                    <div className="col-md-8 center-donate-detail">
                        {
                            <DonateDetailCard
                                id={homeUserFeedContent[value].id}
                                img={homeUserFeedContent[value].img}
                                nameinst={homeUserFeedContent[value].nameinst}
                                phone={homeUserFeedContent[value].phone}
                                email={homeUserFeedContent[value].email}
                                street={homeUserFeedContent[value].street}
                                city={homeUserFeedContent[value].city}
                                titledonate={homeUserFeedContent[value].titledonate}
                                donateds={homeUserFeedContent[value].donateds}
                                site={homeUserFeedContent[value].site}
                                initdate={homeUserFeedContent[value].initdate}
                                avatar={homeUserFeedContent[value].avatar}
                                username={homeUserFeedContent[value].username}
                                userjob={homeUserFeedContent[value].userjob}
                            />
                        }
                    </div>
                    <div className="col-md-2 sidebar-right-donate-detail">
                        <div className="sidebar-donate-detail-container">
                            {sidebarInfo.map((info) =>
                                <UserSideBar
                                    avatar={info.avatar}
                                    name={info.name}
                                    job={info.job}
                                    titleEvpYear={info.titleEvpYear +" "+ mdate.getFullYear()}
                                    titleDonate={info.titleDonate}
                                    donateValue={info.donateValue}
                                    donateMax={info.donateMax}
                                    activityValue={info.activityValue}
                                    activityMax={info.activityMax}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DonateDetail;
