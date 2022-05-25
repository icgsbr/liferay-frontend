import React, {Suspense, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Components/layout/Login";
import Home from "./Pages/User/Home";
import RegisterActivity from "./Pages/User/RegisterActivity";
import Institution from "./Pages/User/Institution";
<<<<<<< HEAD
import DonateDetail from "./Pages/User/DonateDatail";

import { DonateContext } from "./Pages/User/DonateDetailContext";
=======
import AddInstitution from "./Pages/User/AddInstitution"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
>>>>>>> a82ee0850f455b43830297467e96ced214358c3c

function App() {
    const [value, setValue] = useState(0);

    return(
        <div className="app-container">
            <Suspense fallback={<div>Loading page...</div>}>
                <BrowserRouter>
<<<<<<< HEAD
                    <DonateContext.Provider value={{ value, setValue }}>
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/registeractivity" element={<RegisterActivity/>}/>
                            <Route path="/institution" element={<Institution/>}/>
                            <Route path="/donatedetail" element={<DonateDetail/>}/>
                        </Routes>
                    </DonateContext.Provider>
=======
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/registeractivity" element={<RegisterActivity/>}/>
                        <Route path="/institution" element={<Institution/>}/>
                        <Route path="/addInstituition" element={<AddInstitution/>}/>
                    </Routes>
>>>>>>> a82ee0850f455b43830297467e96ced214358c3c
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
