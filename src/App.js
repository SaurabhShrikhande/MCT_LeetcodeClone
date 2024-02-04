import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Home from './Home';
import SignIn from './SignIn';

function App() {
 useEffect(() => {

const options = {
  method: 'GET',
  url: 'https://judge0-ce.p.rapidapi.com/about',
  headers: {
    'X-RapidAPI-Key': '78694a20d7mshef0f9d10f0862bdp1bfcf2jsn1311620c552a',
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
  }
};
async function callapi (){
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

  callapi();
  
 },[])
  
  return (
    <div  className="Appone">
       <Nav/>
       <Home/>
       <SignIn/>
    </div>
  );
}

export default App;
