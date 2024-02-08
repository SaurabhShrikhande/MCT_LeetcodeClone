import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Home from './Home';
import SignIn from './SignInn';
import SignUp from './SignUp';
import List from './List';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import { userContext } from './UserContext'; 
import { useState } from 'react';
import Protect from './Protect';
import Signout from './Signout';
import Leetcode from './Leetcode';
import Compiler from './Compiler';

function App() {
  const [log , setlog ] = useState(false);
//  useEffect(() => {

// const options = {
//   method: 'GET',
//   url: 'https://judge0-ce.p.rapidapi.com/about',
//   headers: {
//     'X-RapidAPI-Key': '78694a20d7mshef0f9d10f0862bdp1bfcf2jsn1311620c552a',
//     'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
//   }
// };
// async function callapi (){
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

//   callapi();
  
//  },[])

// useEffect(() => {
//   const options = {
//     method: 'POST',
//     url: 'https://judge0-ce.p.rapidapi.com/submissions',
//     params: {
//       base64_encoded: 'true',
//       fields: '*'
//     },
//     headers: {
//       'content-type': 'application/json',
//       'Content-Type': 'application/json',
//       'X-RapidAPI-Key': '78694a20d7mshef0f9d10f0862bdp1bfcf2jsn1311620c552a',
//       'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
//     },
//     data: {
//       language_id: 52,
//       source_code: 'I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=',
//       stdin: 'SnVkZ2Uw'
//     }
//   };
//   async function callapii (){
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   callapii();
// }, [])
  
const route = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [ 
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/Signin",
        element : <SignIn/>
      },
      {
        path : "/SignUp",
        element : <SignUp/>
      },
      {
        path :"/Protect",
        element : <Protect/>,
        children : [
          {
            path : "/Protect",
            element : <Signout/>
          },
          {
            path : "/Protect2",
            element : <Layout/>
          },
        ]
      },
      {
        path : "/List",
        element : <List/>
      },{
        path : "/Leetcode/:id",
        element : <Leetcode/>
      },
     {
      path : "/C",
      element : <Compiler/>
     }


    ]
  },
  // {
  //   path :"/Protect",
  //   element : <Protect/>,
  //   children : [
  //     {
  //       path : "/Protect",
  //       element : <Signout/>
  //     },
  //     {
  //       path : "/Protect2",
  //       element : <Layout/>
  //     },
  //   ]
  // },{
  //   path : "/Leetcode",
  //   element : <Leetcode/>
  // },
  // {
  //   path : "/List",
  //   element : <List/>
  // }


  // {
  //   path : "/Signin",
  //   element : <SignIn/>
  // },
  // {
  //   path : "/SignUp",
  //   element : <SignUp/>
  // }

])

  return (
    <div  className="Appone">
      <userContext.Provider value={{
        log ,
        setlog
      }}>
      <RouterProvider router = {route} />
       {/* <Nav/>
       <Home/>
       <SignIn/>
       <SignUp/> */}
       </userContext.Provider>
    </div>
  );
}

export default App;
