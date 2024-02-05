import './Split.css';
import Split from 'react-split'
import Nav from './Nav';

export default function Leetcode() {

    return (<div style={{ }}>
        <Nav />
        <div style={{ background: "black", border:"20px solid black" }}> 
        <div style={{ background: "white" }}>
            <Split
                className="split"
                style={{ padding: "0px", margin: "0px" }}
            >
                <div style={{ minHeight: "80vh" }}>Split1</div>
                <div>Split2</div>
            </Split>
        </div>
        </div> 
    </div>)
}