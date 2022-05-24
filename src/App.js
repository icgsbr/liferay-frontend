import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./Components/layout/Login";
import Home from "./Pages/User/Home";
import RegisterActivity from "./Pages/User/RegisterActivity";
import Institution from "./Pages/User/Institution";
import AddInstitution from "./Pages/User/AddInstitution"
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
