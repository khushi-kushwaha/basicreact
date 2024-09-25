import React from 'react';
import './style.css';
import About from "./components/About.jsx";
import Nav from "./components/Nav";
import Home from "./components/Home";

const App = () => {
  // Access the API key from environment variables
  const apiKey = import.meta.env.VITE_API_KEY;

  let data = "data from the server";
  let subject = ["math", "science", "English"];
  let profile = {
    name:"khushi kushwaha",
    age:18,
    email:"khushi3@gmail.com",

  }

  let info = [
    {
      name:"React",
      version:"1",
      status: "Active"
    },
    {
      name:"Angular",
      version:"2",
      status: "Active"
    }
  ]

let x = info.map((item, index)=>{
  return(
    <div key={index}>
      <h1>Name:{item.name}</h1>
      <p>Version:{item.version}</p>
      <p>Status:{item.status}</p>
    </div>
  )
});



const getinfo = () => {
  console.log("hello world!");
}

const takeninfo = (info) => {
  console.log(info);

}


  return (
    <div>
    
      <button onClick={getinfo} className= "mt-10 mx-10 px-2 py-4 rounded bg-red-300">Print me!</button>
      <button onClick ={() => takeninfo("This is the info!")}className= "mt-10 mx-10 px-2 py-4 rounded bg-red-300">click me!</button>
    </div>
  

  );
};

export default App;
