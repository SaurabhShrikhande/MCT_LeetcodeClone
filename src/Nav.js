export default function Nav(){
    return (<>
        
        <div style={{background:"black", color:"white", display:"flex", justifyContent:"space-around"}}>
           <div style={{display:"flex", gap:"2px"}}>
            <img style={{width:"50px", height:"50px", margin:"auto 0"}} src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt=""/>
            <h2>LeetCode</h2>
            </div> 
            <div style={{margin:"auto 0"}}>
            <button style={{color:"white", cursor:"pointer" , background:"black" , border:"none", fontSize:"16PX"}}>Sign In</button>
            </div>
        </div>

    </>)

}