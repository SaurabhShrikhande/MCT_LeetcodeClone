import { Link } from 'react-router-dom';
import { useContext } from "react";
import { userContext } from "./UserContext";
import { useNavigate } from 'react-router-dom';

export default function Nav(){
    const contxt = useContext(userContext);
    const navigate = useNavigate();
    function signot(){
       // contxt.setlog(false);
           navigate('/Protect');
    }
    return (<>
        
        <div style={{background:"rgb(46,52,61)", color:"white", display:"flex", justifyContent:"space-around", height:"70px"}}>
         
         <Link to="/" style={{color:"white" , textDecoration:"none"}}>
           <div style={{display:"flex", gap:"2px"}}>
            <img style={{width:"50px", height:"50px", margin:"auto 0"}} src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt=""/>
            <h2>LeetCode</h2>
            </div> 
            </Link>
            <div style={{margin:"auto 0"}}>
            
            {  contxt.log ? 
                 <button onClick={signot} style={{color:"white", cursor:"pointer" , background:"rgb(46,52,61)" , border:"none", fontSize:"16PX"}}>Sign Out</button> 
                 :
                <Link to="/SignIn">
                 <button style={{color:"white", cursor:"pointer" , background:"rgb(46,52,61)" , border:"none", fontSize:"16PX"}}>Sign In</button> 
                </Link>
            }
           
            </div>
        </div>

    </>)

}