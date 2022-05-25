import React from "react";

import "./Home.css";
import HeaderUser from "./../../Components/LayoutUser/HeaderUser";
<<<<<<< HEAD
import titleGlobalInfo from "./../../title-info-global";
import TitleInfoGlobal from "./TitleInfoGlobal";
import homeUserFeedInfo from "./../../home-user-feed-info";
import HomeUserFeedCard from "./../User/HomeUserFeedCard";
import sidebarInfo from "./../../sidebar-info";
import UserSideBar from "./UserSideBar";
=======
import titleGlobalInfo from "../../Infos/title-info-global";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";
import homeUserFeedInfo from "../../Infos/home-user-feed-info";
import HomeUserFeedCard from "../../Components/CardsUser/HomeUserFeedCard";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
>>>>>>> a82ee0850f455b43830297467e96ced214358c3c
import Footer from "./../../Components/layout/Footer";

function Home() {
    const mdate = new Date();

    return(
        <div className="home-user-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar-left-home">
                    </div>
                    <div className="col-md-8 center-container-home">
                        <div className="title-global-info-container">
                            {titleGlobalInfo.map((info) =>
                                <TitleInfoGlobal
                                    titleevpmain={"DOAÇÕES E ATIVIDADES VOLUNTÁRIAS"}
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
                        <div className="feed-home-container">
                            {homeUserFeedInfo.map((info) =>
                                <HomeUserFeedCard
                                    id={info.id}
                                    img={info.img}
                                    avatar={info.avatar}
                                    username={info.username}
                                    userjob={info.userjob}
                                    nameinst={info.nameinst}
                                    phone={info.phone}
                                    email={info.email}
                                    donatedate={info.donatedate}
                                    city={info.city}
                                    street={info.street}
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-md-2 sidebar-right-home">
                        <div className="sidebar-home-container">
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
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;
