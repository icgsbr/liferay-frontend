import React from "react";

import "./Institution.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import titleGlobalInfo from "../../title-info-global";
import TitleInfoGlobal from "./TitleInfoGlobal";
import institutionInfo from "../../institution-info";
import InstitutionCard from "./InstitutionCard";
import sidebarInfo from "../../sidebar-info";
import SidebarHomeUser from "./HomeUserSideBar";
import Footer from "../../Components/layout/Footer";

function Institution() {
    const mdate = new Date();

    return(
        <div className="institution-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar-left-institution">
                    </div>
                    <div className="col-md-8 center-institution">
                        <div className="title-global-info-container">
                            {titleGlobalInfo.map((info) =>
                                <TitleInfoGlobal
                                    titleevpmain="INSTITUIÇÕES DO PROGRAMA"
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
                        <div className="filter-institution-container">
                            <input type="search" id="search-institution" placeholder="Search" name="search"/>
                            <select className="form-select" id="select-filter-institution" name="selectFilterInstitution">
                                <option value="1" selected>Instituição com menos doações</option>
                                <option value="2">Instituição com mais doações</option>
                            </select>
                            <button className="btn btn-primary" id="btn-filter-institution">Adicionar Instituição</button>
                            </div>
                        <div className="institution-card-container">
                            {institutionInfo.map((info) =>
                                <InstitutionCard
                                    img={info.img}
                                    name={info.name}
                                    phone={info.phone}
                                    email={info.email}
                                    donateds={info.donateds}
                                    titledonate={info.titledonate}
                                    instdate={info.instdate}
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-md-2 sidebar-right-institution">
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

export default Institution;
