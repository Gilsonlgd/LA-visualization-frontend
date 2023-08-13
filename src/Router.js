import React from "react";
import Dashboard from "./Views/Dashboard/DashboardView";
import IndividualView from "./Views/Dashboard/Individual/IndividualView";

import { Routes, Route, useLocation } from "react-router-dom";

function Router() {
    const location = useLocation();
    return (
        <Routes location={location}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/individual/:user_name" element={<IndividualView />} />
        </Routes>
    );
}

export default Router;