import React, {Suspense, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Components/layout/Login";
import Home from "./Pages/User/Home";
import RegisterActivity from "./Pages/User/RegisterActivity";
import Institution from "./Pages/User/Institution";
import DonateDetail from "./Pages/User/DonateDatail";

import { DonateContext } from "./Pages/User/DonateDetailContext";

function App() {
    const [value, setValue] = useState(0);

    return(
        <div className="app-container">
            <Suspense fallback={<div>Loading page...</div>}>
                <BrowserRouter>
                    <DonateContext.Provider value={{ value, setValue }}>
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/registeractivity" element={<RegisterActivity/>}/>
                            <Route path="/institution" element={<Institution/>}/>
                            <Route path="/donatedetail" element={<DonateDetail/>}/>
                        </Routes>
                    </DonateContext.Provider>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
