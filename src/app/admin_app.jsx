import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Main from "./component/main";
import Planning from "./view/planning";
import Admin from "./view/admin";

const root = ReactDOM.createRoot(
    document.getElementById("main")
)
const links =[{name:'Planning',link:'/'},{name:'Admin',link:'/admin'}];

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main links={links}/>}>
                <Route index element={<Planning/>}></Route>
                <Route path="admin" element={<Admin />}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
