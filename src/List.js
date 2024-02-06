import './List.css';
import Nav from "./Nav"
import { useNavigate } from 'react-router-dom'; 
export default function List(){
  const navigate = useNavigate();
    const arr = [
        {
          sr : "Sr.",
          title : "TITLE",
          difficulty : "DIFFICULTY",
          category : "CATEGORY",
        },
        {
            sr : "",
            title : "aaaaa",
            difficulty : "Easy",
            category : "Stack",
          },
          {
            sr : "",
            title : "bbbb",
            difficulty : "Medium",
            category : "Two Pointer",
          }, {
            sr : "",
            title : "cccc",
            difficulty : "Hard",
            category : "Linked List",
          }, {
            sr : "",
            title : "dddd",
            difficulty : "Hard",
            category : "Binary Tree",
          }, {
            sr : "",
            title : "eeee",
            difficulty : "Medium",
            category : "Stack",
          },
          {
              sr : "",
              title : "aaaaa",
              difficulty : "Easy",
              category : "Stack",
            },
            {
              sr : "",
              title : "bbbb",
              difficulty : "Medium",
              category : "Two Pointer",
            }, {
              sr : "",
              title : "cccc",
              difficulty : "Hard",
              category : "Linked List",
            }, {
              sr : "",
              title : "dddd",
              difficulty : "Hard",
              category : "Binary Tree",
            }, {
              sr : "",
              title : "eeee",
              difficulty : "Medium",
              category : "Stack",
            },

    ]

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
                        <th style={{width:"200px"}}>{item.title}</th>
                        <th style={{width:"120px"}}>{item.difficulty}</th>
                        <th style={{width:"120px"}}>{item.category} </th>
                       </tr>
                    }
                    {
                        idx !== 0 && 
                        <tr onClick={() => navigate("/Leetcode")} style={idx % 2 === 0 ? {background:"rgb(40,40,40)", cursor:"pointer" }: {background: "",  cursor:"pointer"} }>
                        <td style={{width:"40px", paddingLeft:"20px"}}>{idx}</td>
                        <td style={{width:"200px"}}>{item.title}</td>
                        <td style={{width:"120px"}}>{item.difficulty}</td>
                        <td style={{width:"120px"}}>{item.category} </td>
                       </tr>
                    }
                  
                  </table>
                  </div>
                })
            }
        </div>

    </div>)
}