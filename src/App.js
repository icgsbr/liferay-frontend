import React, {Suspense, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Components/layout/Login";
import Home from "./Pages/User/Home";
import RegisterActivity from "./Pages/User/RegisterActivity";
import Institution from "./Pages/User/Institution";
import DonateDetail from "./Components/Details/DonateDatail";

import { DonateContext } from "./Components/Details/DonateDetailContext";
import AddInstitution from "./Pages/User/AddInstitution";

function App() {
    const [value, setValue] = useState(0);

    return(
        <div className="app-container">
            <Suspense fallback={<div>Loading page...</div>}>
                <BrowserRouter>
                    <DonateContext.Provider value={{ value, setValue }}></DonateContext.Provider>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/registeractivity" element={<RegisterActivity/>}/>
                        <Route path="/institution" element={<Institution/>}/>
                        <Route path="/addInstituition" element={<AddInstitution/>}/>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
