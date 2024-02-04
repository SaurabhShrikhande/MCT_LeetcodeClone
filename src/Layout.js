import { Outlet } from "react-router-dom";
import Nav from "./Nav";
export default function(){
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    )
}