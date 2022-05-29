import React from "react";

import "./Home.css";
import HeaderUser from "./../../Components/LayoutUser/HeaderUser";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "./../../Components/layout/Footer";

function InstitutionSelect() {
    const mdate = new Date();

    return(
        <div className="home-user-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar-left-home">
                    </div>
                    <div className="col-md-8 center-container-home">
                        </div>
             
                    </div>
                    <div className="col-md-2 sidebar-right-home">
                        <div className="sidebar-home-container">
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
    );
}
export default InstitutionSelect;