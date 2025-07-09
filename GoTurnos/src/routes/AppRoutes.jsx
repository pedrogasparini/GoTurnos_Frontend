import Login from "../components/login/Login";
import Guest from "../pages/Guest/Guest"
import { Routes, Route } from "react-router-dom";

export default function AppRoutes () {
    return (
        
        <Routes>
            <Route path="/guest" element={<Guest />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            

        </Routes>

    )
} 