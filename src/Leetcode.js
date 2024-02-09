import './Split.css';
import Split from 'react-split'
import Compiler from './Compiler';
import { useParams } from 'react-router-dom';
import arr from './Leetcodelist';

export default function Leetcode() {
   const params = useParams();
 console.log(params);
//    params.order 

const arrreq = arr.find((item) => item.id === params.id);
   
    return (<div style={{}}>
        <div style={{ background: "black", border: "20px solid black" }}>
            <div style={{ background: "rgb(40,40,40)" , color:"white"}}>
                <Split
                    className="split"
                    style={{ padding: "0px", margin: "0px" }}
                >
                    <div style={{ minHeight: "calc(100vh - 150px )", margin:"20px" }}>
                     <span style={{background:"rgb(34,61,50)" , padding:"5px 20px" , borderRadius:"5px" , height:"20px"}} >Description</span>
                       
                    <h1>{arrreq.title}</h1>
                    <span style={{color:"green", background:"rgb(34,61,50)", padding:"5px 20px" , borderRadius:"20px"}}>{arrreq.difficulty}</span>
                        <p>{arrreq.description}</p>
                        <h3>Example 1:</h3>
                        <div style={{background:"rgb(78,78,78)" , padding:"5px 20px" , borderRadius:"10px"}}>
                        <h4>Input: <span style={{fontWeight:"400"}}>{arrreq.input} </span> </h4>
                        <h4>Output: <span style={{fontWeight:"400"}}>{arrreq.output} </span> </h4>
                        </div>

                        <h3>Example 2:</h3>
                        <div style={{background:"rgb(78,78,78)" , padding:"5px 20px" , borderRadius:"10px"}}>
                        <h4>Input: <span style={{fontWeight:"400"}}>{arrreq.inputt} </span> </h4>
                        <h4>Output: <span style={{fontWeight:"400"}}>{arrreq.outputt} </span> </h4>
                        </div>
                    </div>
                    <div style={{}}>
                        <div style={{margin:"20px"}}>
                           <select style={{width:"100px" , height:"28px"}}>
                            <option value="java">Java</option>
                            <option value="python">Python</option>
                            <option value="c">C</option>
                            <option value="c++">C++</option>
                           </select>
                        </div>
                           
                        {/* <div style={{}}>
                              <h4>TestCases</h4> 
                              <h3>Case 1</h3>
                              <h5>Input</h5>
                              <h3>nums: {arrreq.input} </h3>
                              <h5>Output</h5>
                              <h3>{arrreq.output}</h3>
                       </div>    */}
                        <textarea style={{width:"95%", height:"70vh", margin:"2%" , background:"rgb(30,30,30)", color:"white"}}></textarea>
                       <div style={{display:"flex", justifyContent:"space-between"}}>
                        <button style={{background:"rgb(62,62,62)" , padding:"5px 20px" , borderRadius:"10px", color:"white"}} >Console ^</button>
                        <div>
                            <button style={{background:"rgb(62,62,62)" , padding:"5px 20px" , borderRadius:"10px", color:"white"}}>Run</button>
                            <button style={{background:"rgb(44,187,93)" , padding:"5px 20px" , borderRadius:"10px", color:"white", marginLeft:"15px"}}>Submit</button>
                        </div>
                       </div>
                    </div>
                </Split>
            </div>
        </div>
    </div>)
}