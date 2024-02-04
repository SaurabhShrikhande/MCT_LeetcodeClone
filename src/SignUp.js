import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'

export default function SignUp(){
      const [email , setemail] = useState("");
      const [pass , setpass] = useState("");

      function handlesignin(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
        .then( () => {
          alert("Sign In Sussesfuly completed")
          setemail("");
          setpass("");
        })
        .catch((err) => {
        alert(`Error...! ${err.message}`)
        console.log(err);
        })
      } 
    return(
        <div className="App flex" style={{minHeight:"calc(100vh - 72px)"}} >
       <div  style={{border:"0px solid black", minHeight:"65vh", padding:"50px 20px", borderRadius:"10px" , boxShadow:"0px 0px 4px 2px gray"}}>
      <div style={{lineHeight:"100px"}}>
         <form >
        <input onChange={(e) => setemail(e.target.value)} style={{width:"400px", fontSize:"25px"}} type = "text"  placeholder='userId' value={email}/> <br/>
        <input onChange={(e) => setpass(e.target.value)} style={{width:"400px", fontSize:"25px"}} type ="password" placeholder="password" value={pass} /> <br></br>
        <button onClick={handlesignin} style={{width:"400px", fontSize:"25px" , backgroundColor:"#0095F6", color:"white", border:"none", padding:"5px 0", borderRadius:"10px"}}>Sign Up</button> 
        </form>
      </div>
       <hr style={{width:"450px", marginTop:"70px"}}></hr>
       <div>
      <h3>Have an account?</h3> 
      <Link to="/Signin" style={{textDecoration:"none"}} >  <h2 style={{color:"#0095F6"}}>Sign In</h2> </Link> 
      </div>
      </div>
    </div>
    )
}