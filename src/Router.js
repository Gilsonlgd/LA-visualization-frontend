import React from "react";
import Dashboard from "./Views/Dashboard/DashboardView";

import { Routes, Route, useLocation } from "react-router-dom";

function Router() {
    const location = useLocation();
    return (
        <Routes location={location}>
        <Route path="/" element={<Dashboard />} />
        </Routes>
    );
}

export default Router;