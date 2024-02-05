import './App.css';
import { Link , useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './firebase'
import { useContext } from "react";
import { userContext } from "./UserContext";

export default function SignIn(){
 const [email , setemail] = useState("");
const [pass , setpass] = useState("");
const contxt = useContext(userContext);
 const navigate = useNavigate();
  function handllelogin(e){
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass) 
    .then(() => {
      
      alert("USER SIGN iN");
      console.log(contxt.log);
            navigate("/Protect")
   //   navigate("/Home");
    }
   )
    .catch((err) => alert(`Error ${err}`) ) 
  } 

    return(
        <div className="App flex" style={{minHeight:"calc(100vh - 72px)"}} >
       <div  style={{border:"0px solid black", minHeight:"70vh", padding:"50px 20px", borderRadius:"10px" , boxShadow:"0px 0px 4px 2px gray"}}>
      <div style={{lineHeight:"100px"}}>
         <form >
        <input style={{width:"400px", fontSize:"25px"}} type = "text"  placeholder='userId' onChange={(e) => setemail(e.target.value)} value={email}/> <br/>
        <input style={{width:"400px", fontSize:"25px"}} type ="password" placeholder="password" onChange={(e) => setpass(e.target.value)} value={pass}/> <br></br>
        <button onClick={handllelogin}  style={{width:"400px", fontSize:"25px" , backgroundColor:"#0095F6", color:"white", border:"none", padding:"5px 0", borderRadius:"10px"}}>Sign In</button>
        </form>
      </div>
       <hr style={{width:"450px", marginTop:"70px"}}></hr>
       <div>
      <h3>Dont't Have an account?</h3> 
      <Link to="/SignUp" style={{textDecoration:"none"}}>  <h2 style={{color:"#0095F6"}}>Sign Up</h2> </Link> 
      </div>
      </div>
    </div>
    )
}