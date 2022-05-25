import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/User/Home";
import RegisterActivity from "./Pages/User/RegisterActivity";
import Institution from "./Pages/User/Institution";
import AddInstitution from "./Pages/User/AddInstitution"
import InstitutionSelect from "./Pages/User/InstitutionSelect"
import HomeRH from "./Pages/RH/HomeRH"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return(
        <div className="app-container">
            <Suspense fallback={<div>Loading page...</div>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/homeRH" element={<HomeRH/>}/>
                        <Route path="/registeractivity" element={<RegisterActivity/>}/>
                        <Route path="/institution" element={<Institution/>}/>
                        <Route path="/addInstituition" element={<AddInstitution/>}/>
                        <Route path="/InstitutionSelect" element={<InstitutionSelect/>}/>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
