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
            id: "two-sum",
            title: "Two Sum",
            difficulty: "Easy",
            category: "Array",
            order: 1,
            videoId: "8-k1C6ehKuw",
          },
          {
            id: "reverse-linked-list",
            title: "Reverse Linked List",
            difficulty: "Hard",
            category: "Linked List",
            order: 2,
            videoId: "",
          },
          {
            id: "jump-game",
            title: "Jump Game",
            difficulty: "Medium",
            category: "Dynamic Programming",
            order: 3,
            videoId: "",
          },
          {
            id: "valid-parentheses",
            title: "Valid Parentheses",
            difficulty: "Easy",
            category: "Stack",
            order: 4,
            videoId: "xty7fr-k0TU",
          },
          {
            id: "search-a-2d-matrix",
            title: "Search a 2D Matrix",
            difficulty: "Medium",
            category: "Binary Search",
            order: 5,
            videoId: "ZfFl4torNg4",
          },
          {
            id: "container-with-most-water",
            title: "Container With Most Water",
            difficulty: "Medium",
            category: "Two Pointers",
            order: 6,
            videoId: "",
          },
          {
            id: "merge-intervals",
            title: "Merge Intervals",
            difficulty: "Medium",
            category: "intervals",
            order: 7,
            videoId: "",
          },
          {
            id: "maximum-depth-of-binary-tree",
            title: "Maximum Depth of Binary Tree",
            difficulty: "Easy",
            category: "Tree",
            order: 8,
            videoId: "4qYTqOiRMoM",
          },
          {
            id: "best-time-to-buy-and-sell-stock",
            title: "Best Time to Buy and Sell Stock",
            difficulty: "Easy",
            category: "Array",
            order: 9,
            videoId: "",
          },
          {
            id: "subsets",
            title: "Subsets",
            difficulty: "Medium",
            category: "Backtracking",
            order: 10,
            videoId: "",
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
                        <th style={{width:"400px"}}>{item.title}</th>
                        <th style={{width:"150px"}}>{item.difficulty}</th>
                        <th style={{width:"150px"}}>{item.category} </th>
                       </tr>
                    }
                    {
                        idx !== 0 && 
                        <tr onClick={() => navigate("/Leetcode")} style={idx % 2 === 0 ? {background:"rgb(40,40,40)", cursor:"pointer" }: {background: "",  cursor:"pointer"} }>
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