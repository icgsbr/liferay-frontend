import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./Components/layout/Login";
import Home from "./Pages/User/Home";

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
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
