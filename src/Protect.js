import { useContext } from "react";
import { userContext } from "./UserContext";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Protect(){
  const contxt = useContext(userContext);
    
  if (contxt.log === true){
    return (<div>
        <Outlet/>
    </div>)
  }

   return (<div>  
      <Navigate to="/"/>
   </div>)
}