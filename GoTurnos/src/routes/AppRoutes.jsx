import Guest from "../pages/Guest/Guest"
import { Routes, Route } from "react-router-dom";

export default function AppRoutes () {
    return (
        
        <Routes>
            <Route path="/guest" element={<Guest />}>
            </Route>

        </Routes>

    )
} 