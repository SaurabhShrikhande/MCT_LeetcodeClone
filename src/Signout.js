import './App.css';
import { signOut } from 'firebase/auth';
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { userContext } from "./UserContext";
import Nav from './Nav';

export default function Signout(){
    const navigate = useNavigate();
    const contxt = useContext(userContext);

    function signout(e){
      e.preventDefault();
          signOut(auth)
         .then(() =>{
            contxt.setlog(false);
            alert("Sign Out");
           navigate("/");
         } )
         .catch((err) => alert(`err ${err}`))
    }
  

    return (<div>
        <Nav/>
          <div className='flex' style={{flexDirection:"column" , minHeight:"400px"}}>
        <h1>Do you want to log out</h1>
        <button style={{width:"400px", fontSize:"25px" , backgroundColor:"#0095F6", color:"white", border:"none", padding:"5px 0", borderRadius:"10px"}} onClick={signout}>Sign out</button>
    </div>
    </div>
    )
}