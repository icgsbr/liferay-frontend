import Navbar from "../../Components/LayoutUser/HeaderUser";
import Footer from "../../Components/layout/Footer";
import HomeSideBar from "./HomeSideBar";

import userfake from "../../sidebar-info";

function sidebarInfo(info) {
    return(
        <HomeSideBar
            key={info.id}
            avatar={info.avatar}
            name={info.name}
            job={info.job}
            titleEvp={info.titleEvp}
            titleDonate={info.titleDonate}
            donateText={info.donateText}
            donateValue={info.donateValue}
            titleActivity={info.titleActivity}
            activityText={info.activityText}
            activityValue={info.activityValue}
            titleGoals={info.titleGoals}
            goalsText={info.goalsText}
            goalsValue={info.goalsValue}
            activityGoalsText={info.activityGoalsText}
            activityGoalsValue={info.activityGoalsValue}
        />
    );
}

function Home(props) {
    return(
        <div className="home-user-container">
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-2">
                        {userfake.map(sidebarInfo)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;