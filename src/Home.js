
export default function Home(){
    return(<div>
        <div style={{minHeight:"calc(100vh - 72px)", display:"flex", justifyContent:"center", alignItems:"center", background:"linear-gradient(gray, black)"}}>
            <div style={{textAlign:"center", color:"white"}}>
            <h1>A New Way to Learn</h1>
            <p style={{maxWidth:"500px"}}>LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
            <button style={{background:"#F89F1B", color:"white", padding:"10px 15px", border:"none", borderRadius:"20px", fontWeight:"800"}}>Create Account</button>
            </div>
      </div>   
    </div>)
}