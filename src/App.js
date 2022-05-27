import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/User/Home";
import RegisterActivity from "./Pages/User/RegisterActivity";
import Institution from "./Pages/User/Institution";
import AddInstitution from "./Pages/User/AddInstitution"
import InstitutionSelect from "./Pages/User/InstitutionSelect"
import Forms from "./Pages/User/Forms"
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
                        <Route path="/admin" element={<HomeRH/>}/>
                        <Route path="/form" element={<Forms/>}/>
                        <Route path="/registeractivity" element={<RegisterActivity/>}/>
                        <Route path="/institution" element={<Institution/>}/>
                        <Route path="/addInstituition" element={<AddInstitution/>}/>
                        <Route path="/institutionSelect" element={<InstitutionSelect/>}/>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
