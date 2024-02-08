import './List.css';
import Nav from "./Nav"
import arr from './Leetcodelist';
import { useNavigate } from 'react-router-dom'; 
export default function List(){
  const navigate = useNavigate();
    

    function problempage(id){
      navigate(`/Leetcode/${id}`);
    }

    return (<div>
        <div  style={{background:"black" , minHeight:"calc(100vh - 70px )"}}>
            {
                arr.map((item, idx) => {
                   return  <div key={idx} style={{display:"flex", justifyContent:"center", background:"black"}}>
                    <table style={{}}>
                  {
                    idx === 0 && 
                        <tr style={{textAlign:"left"}}>
                        <th style={{width:"40px", paddingLeft:"20px"}}>{item.sr}</th>
                        <th style={{width:"400px"}}>{item.title}</th>
                        <th style={{width:"150px"}}>{item.difficulty}</th>
                        <th style={{width:"150px"}}>{item.category} </th>
                       </tr>
                    }
                    {
                        idx !== 0 && 
                        <tr onClick={()=> problempage(item.id)} style={idx % 2 === 0 ? {background:"rgb(40,40,40)", cursor:"pointer" }: {background: "",  cursor:"pointer"} }>
                        <td style={{width:"40px", paddingLeft:"20px"}}>{idx}</td>
                        <td style={{width:"400px"}}>{item.title}</td>
                        <td style={{width:"150px"}}>{item.difficulty}</td>
                        <td style={{width:"150px"}}>{item.category} </td>
                       </tr>
                    }
                  
                  </table>
                  </div>
                })
            }
        </div>

    </div>)
}