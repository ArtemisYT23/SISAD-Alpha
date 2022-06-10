import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Dashboard from "../../Views/Dashboard";
import Documentary from "../../Views/Documentary";
import Managment from "../../Views/Managment";

const AppRouter = () => {
    return(
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path="managment" element={<Managment />} />
            <Route path='documentary' element={<Documentary />} />
        </Routes>        
        </BrowserRouter>
    );
};

export default AppRouter;
