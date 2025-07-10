import Guest from "../pages/Guest/Guest"
import { Routes, Route } from "react-router-dom";

export default function AppRoutes () {
    return (
        
        <Routes>
            <Route path="/" element={<Guest />}>
            </Route>

        </Routes>

    )
} 