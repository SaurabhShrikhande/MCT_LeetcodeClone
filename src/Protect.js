import { useContext } from "react";
import { userContext } from "./UserContext";
import { Navigate } from "react-router-dom";

export default function Protect(){
  const contxt = useContext(userContext);
    
  if (contxt.log === true){
    return (<div>
        <h1>Protect</h1>
    </div>)
  }

  
   <Navigate to="/Home"/>
  
   
}