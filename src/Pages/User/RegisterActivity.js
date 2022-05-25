import React from "react";
import { NavLink } from "react-router-dom";

import "./RegisterActivity.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
<<<<<<< HEAD
import titleGlobalInfo from "../../title-info-global";
import TitleInfoGlobal from "./TitleInfoGlobal";
import registerActivityInfo from "./../../register-activity-info";
import RegisterActivityCard from "./../User/RegisterActivityCard";
import sidebarInfo from "../../sidebar-info";
import UserSideBar from "./UserSideBar";
=======
import titleGlobalInfo from "../../Infos/title-info-global";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";
import registerActivityInfo from "../../Infos/register-activity-info";
import RegisterActivityCard from "../../Components/CardsUser/RegisterActivityCard";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
>>>>>>> a82ee0850f455b43830297467e96ced214358c3c
import Footer from "../../Components/layout/Footer";

function RegisterActivity() {
    const mdate = new Date();

  
    return(
        <div className="register-activity-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar-left-register-activity">
                    </div>
                    <div className="col-md-8 center-register-activity">
                        <div className="title-global-info-container">
                            {titleGlobalInfo.map((info) =>
                                <TitleInfoGlobal
                                    titleevpmain="REGISTRO DE ATIVIDADES"
                                    titledonateglobal={info.titledonateglobal}
                                    titledonatevalor={info.titledonatevalor}
                                    donatevalue={info.donatevalue}
                                    titledonatemeta={info.titledonatemeta}
                                    donatemeta={info.donatemeta}
                                    titleactivityglobal={info.titleactivityglobal}
                                    titleactivityvalor={info.titleactivityvalor}
                                    activityvalue={info.activityvalue}
                                    titleactivitymeta={info.titleactivitymeta}
                                    activitymeta={info.activitymeta}
                                />
                            )}
                        </div>
                        <div className="feed-activity-container">
                            {registerActivityInfo.map((info) =>
                                <RegisterActivityCard
                                    img={info.img}
                                    name={info.name}
                                    phone={info.phone}
                                    email={info.email}
                                    city={info.city}
                                    street={info.street}
                                    activityValue={info.activityValue}
                                    activityText={info.activityText}
                                    activityDate={info.activityDate}
                                    activityTitle={info.activityTitle}
                                    activityState={info.activityState}
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-md-2 sidebar-right-register-activity">
                        <div className="sidebar-activity-container">
                            {sidebarInfo.map((info) =>
                                <UserSideBar
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
                        <div className="button-new-activity-container">
                            <NavLink className="btn btn-primary button-new-register-activity" to="">Criar nova atividade</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}

export default RegisterActivity;
