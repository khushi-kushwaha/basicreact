import React, { useState } from 'react';
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

const [title, setTitle] = useState("hello world!");

const getInfo = () =>{
  setTitle("Hello World! I am clicked");
}

// console.log(title);

const [ time ,settime] = useState(new Date().toLocaleTimeString());

setInterval(() => {
    settime(new Date().toLocaleTimeString())
},1000);


const SubmitHandler = (e) => {
   e.preventDefault();
   console.log(e.target.username.value);
   console.log("From SubmitHandler");
};


const [username,setusername] = useState("");
const submithandlers = (e)=>{
  e.preventDefault();
  console.log(username);
};


const[ error ,seterror] =useState(false);

  return (
    <div className="p-3 rounded w-[80%] mx-auto mt-10 bg-zinc-300">
           
           <form onSubmit = {submithandlers} >
            <input type="type" 
            placeholder="username"
            name = "username"
            onInput={(e) => e.target.value.length < 5 
              ?seterror (true)
              :seterror (false)
            }
            onChange={(e) => setusername(e.target.value)}
           />
            {error && <p className="text-red-500">Username length must be greater than 5 characters</p>}
            <button>Submit</button>
           </form>
    
       {/* <form onSubmit={SubmitHandler}>
        <input name = "username" placeholder="Enter username" className="mt-10 mx-10 px-4 py-2 rounded bg-green-100" onInput="{e.target.value.length < 5? seterror(true) : seterror(false)}"/>
        <button className = "mt-10  mx-10 px-2 py- 4 rounded bg-blue-200">Submit</button>
       </form> */}

      {/* <h1 className ="text-center mt-10 text-5xl">{time}</h1> */}
      {/* <h1>{title}</h1>
     <button onClick={getInfo} className = "mt-10 mx-10 px-2 py-4 rounded bg-red-300">Click me!</button> */}
     
    
      {/* <button onClick={getinfo} className= "mt-10 mx-10 px-2 py-4 rounded bg-red-300">Print me!</button>
      <button onClick ={() => takeninfo("This is the info!")}className= "mt-10 mx-10 px-2 py-4 rounded bg-red-300">click me!</button> */}
    </div>
  

  );
};

export default App;


//useSatet
//2-way binding 
//object destructing 
//validation
//radio