import './Split.css';
import Split from 'react-split'

import Nav from './Nav';

export default function Leetcode() {

    return (<div style={{}}>
        <Nav />
        <div style={{ background: "black", border: "20px solid black" }}>
            <div style={{ background: "rgb(40,40,40)" , color:"white"}}>
                <Split
                    className="split"
                    style={{ padding: "0px", margin: "0px" }}
                >
                    <div style={{ minHeight: "calc(100vh - 150px )", margin:"20px" }}>Split1</div>
                    <div>
                        <div style={{margin:"20px"}}>
                           split2
                            
                        </div>

                    </div>
                </Split>
            </div>
        </div>
    </div>)
}