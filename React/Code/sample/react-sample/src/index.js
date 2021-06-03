import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'

const name = 'Adithya';
const element = <h1>Hello, {name}</h1>;

const user = {
  firstName: 'Varkuri',
  lastName: 'Adithya'
};

function formatName(user) {
  if (user) {
    return user.firstName + ' ' + user.lastName;
  }
  return <h1>Hello, Stranger.</h1>;
  //return user.firstName + ' ' + user.lastName;
}

const fullElement = (
  <div>
  <h1>
    Hello, {formatName(user)}!
  </h1>
  </div>
);


function AppTwo(){
  return <h1>This is secomd app</h1>;
}

function AppCheckbox(){

  //this is with out use reducer 
  // we need to write seperate  method for onchange
  // check below AppCheckboxReduecer for alternative;
  const [checked ,setChecked] = useState(false);

function toggle(){
  setChecked(checked => !checked)
}

  return(
  <div>
   <input type = "checkbox" value = {checked} onChange= {toggle}></input>
   <p>{checked ? "checked" : "notchecked"}</p>
   </div>
   );
}

function AppCheckboxReduecer(){
  const [checked ,toggle] = useReducer(checked => !checked ,false);
  return(
  <div>
   <input type = "checkbox" value = {checked} onChange= {toggle}></input>
   <p>{checked ? "checked" : "notchecked"}</p>
   </div>
   );
}


function UseStateApp(){
  const [emotion,setEmotion] = useState("Happy");
  //if the value emotion is changed then  useeffect is used to trigger the on change events
  // useEffect(() => 
  // {
  //   console.log('emotion is ${emotion}');
  // } ,[]);
  return  (
    <div>
        <h1>current emotion is {emotion} </h1>
        <button onClick={()=> setEmotion("Happy")}>Happy</button>
        <button onClick={()=> setEmotion("Frustated")}>Frustated</button>
        <button onClick={()=> setEmotion("Sad")}>Sad</button>
</div>
  );
}

function WebserviceApp({login}){
  //https://api.github.com/users/adithyavarkuri

  const [data, setdata] = useState(null);
  const [loading ,setLoading] =useState(false);
  const [error ,setError] =useState(null);
  useEffect(() => {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`).then((response) => response.json()).then(setdata)
    .then(() => setLoading(false))
    .catch(setError);

  } , [login]);

  if(loading) return  <h1>loading...........</h1>
  if(error) return <pre> {JSON.stringify(error,null ,2)}</pre>
  if(!data) return null;


  if(data){
      return( <div>
       {/* <div> {JSON.stringify(data)}</div> */}
       <h1>{data.login}</h1>
       <img alt = {data.login}  src = {data.avatar_url}></img>
        </div>)
  }
  return (
    <div>
      No user is available
    </div>
  );
}

ReactDOM.render(
//  React.createElement("h1" ,
  //{ style: { color:"blue"}},"hello everyone"),

//   React.createElement("h1" ,
//  null,
//  React.createElement("li" , null , "Monday"),
//  React.createElement("li" , null , "Tuesday"),
//  React.createElement("li" , null , "Wednesday"),
//  React.createElement("li" , null , "Thrusday"),
//  React.createElement("li" , null , "Friday"),
//  React.createElement("li" , null , "Saturday"),
//  React.createElement("li" , null , "Sunday"),
//  ),

//using jsx we can render element 
//fullElement,
<div>
  <Router>
  <App isAuthorized={true}></App>
  <WebserviceApp login = "adithyavarkuri"></WebserviceApp>
  <AppCheckboxReduecer></AppCheckboxReduecer>
  <AppCheckbox></AppCheckbox>
  <UseStateApp></UseStateApp>
  <AppTwo></AppTwo>
  </Router>
</div>,
   document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
