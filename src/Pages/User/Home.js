import Navbar from "../../Components/LayoutUser/HeaderUser";
import Footer from "../../Components/layout/Footer";
import TitleInfoGlobal from "./TitleInfoGlobal";
import HomeUserFeedCard from "./HomeUserFeedCard";
import HomeUserSideBar from "./HomeUserSideBar";

import "./Home.css";
import tetleFeedInfoGlobal from "./../../title-feed-info-global";
import homeuserfeedInfo from "./../../home-user-feed-info";
import userFake from "./../../sidebar-info";

const dateevp = new Date();

function feedInfoGlobal(info) {
    const subtitleevp = info.subtitleevp +" "+ dateevp.getFullYear();

    return(
        <TitleInfoGlobal
            titleevpmain={info.titleevpmain}
            subtitleevp={subtitleevp}
            titledonateglobal={info.titledonateglobal}
            titledonatevalor={info.titledonatevalor}
            donatevalue={info.donatevalue}
            titledonatemeta={info.titledonatemeta}
            donatemeta={info.donatemeta}
            titleactivityglobal={info.titleactivityglobal}
            titleactivityvalor={info.titleactivityvalor}
            activityvalue={info.activityvalue}
            titleactivitymeta={info.titleactivitymeta}
            activitymeta={info.activitymeta} />
    );
}

function homeuserfeedCard(info) {
    return(
        <HomeUserFeedCard
            key={info.id}
            img={info.img}
            avatar={info.avatar}
            username={info.username}
            userjob={info.userjob}
            nameinst={info.nameinst}
            dateinst={info.dateinst}
            localeinst={info.localeinst} />
    );
}

function sidebarInfo(info) {
    const titleEvpYear = info.titleEvpYear +" "+ dateevp.getFullYear();

    return(
        <HomeUserSideBar
            key={info.id}
            avatar={info.avatar}
            name={info.name}
            job={info.job}
            titleEvpYear={titleEvpYear}
            titleDonate={info.titleDonate}
            donateMax={info.donateMax}
            donateValue={info.donateValue}
            titleActivity={info.titleActivity}
            activityMax={info.activityMax}
            activityValue={info.activityValue} />
    );
}

function changeMenuSideBarRight() {
    var vwsize = document.getElementById('request-window-size');
    var vw = window.innerWidth;
}

changeMenuSideBarRight();

window.addEventListener('resize', ()=>{
    changeMenuSideBarRight();
});

function Home() {
    return(
        <div className="home-user-container">
            <Navbar/>
            <div className="container-fluid overflow-scroll">
                <div className="row">
                    <div className="col-md-2 sidebar-left-home">
                    </div>
                    <div className="col-md-8 center-container-home">
                        <div className="row home-user-title-container">
                            {tetleFeedInfoGlobal.map(feedInfoGlobal)}
                        </div>
                        <div className="row">
                            {homeuserfeedInfo.map(homeuserfeedCard)}
                        </div>
                    </div>
                    <div className="col-md-2 sidebar-right-home">
                        {userFake.map(sidebarInfo)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;