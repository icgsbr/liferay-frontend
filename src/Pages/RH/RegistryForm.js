import React, { useContext } from "react";
import "./RegistryForm.css";
import HeaderRH from "../../Components/LayoutRH/HeaderRH";
import {ModelContext} from "../../Components/ModelContext";
import TitleInfoGlobalRH from "../../Components/TitleGlobal/TitleInfoGlobalRH";
import sidebarInfo from "../../Infos/sidebarRH-info";
import homeRHFeedInfo from "../../Infos/home-RH-feed-info";
import SidebarHomeRH from "../../Components/SideBars/HomeRHSideBar";
import RegistryFormCard from "../../Components/CardsUser/RegistryFormCard";
import Footer from "../../Components/layout/Footer";


function RegistryForm() {
    var mdate = new Date();
    const {context,setContext} = useContext(ModelContext);
    return(
        <div className="home-user-container overflow-scroll">
            <HeaderRH/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-container-home">
                        <TitleInfoGlobalRH titleevpmain={"REGISTRO DO FORMULÁRIO"}/>
                        <div>
                            {
                                <RegistryFormCard 
                                    username = {homeRHFeedInfo[context].username}
                                    usernameSec = {homeRHFeedInfo[context].usernameSec}
                                    nameinst = {homeRHFeedInfo[context].nameinst}
                                    optionConcession = {homeRHFeedInfo[context].optionConcession}

                                />
                            
                            }
                        </div>
                                       
                    </div>
                    <div className="col-md-2 sidebar-right-home">
                        <div className="sidebar-home-container">
                            {sidebarInfo.map((info) =>
                                <SidebarHomeRH
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

export default RegistryForm;
