import React from "react";

import "./registryForm.css";
import HeaderRH from "../../Components/LayoutRH/HeaderRH";
import TitleInfoGlobalRH from "../../Components/TitleGlobal/TitleInfoGlobalRH";
import sidebarInfo from "../../Infos/sidebarRH-info";
import SidebarHomeRH from "../../Components/SideBars/HomeRHSideBar";
import Footer from "../../Components/layout/Footer";
import Registry from "../../Components/registerform";
import registryInfo from "../../Infos/home-user-feed-info"

function RegistryForm() {
    var mdate = new Date();
    return(
        <div className="home-user-container overflow-scroll">
            <HeaderRH/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-container-home">
                        <TitleInfoGlobalRH titleevpmain={"REGISTRO DO FORMULÁRIO"}/>
                        {registryInfo.map((info)=>
                             <Registry 
                             username ={info.username}
                             nameinst = {info.nameinst}
                             optionConcession = {info.optionConcession}
                             />
                        )}    
                       
                                       
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
