import React from 'react';
import ReactDOM from 'react-dom/client';
import one from "./images/one.jpg"
import two from "./images/two.jpg"
import three from "./images/three.jpg"
import four from "./images/p11.png"
import five from "./images/p22.jpg"
import six from "./images/p33.jpg"
import seven from "./images/p44.jpg"
import eight from "./images/p55.jpg"

 const root=ReactDOM.createRoot(document.getElementById("root"))
 function Search(){
  return(
    <div style={{display:"flex",justifyContent:"center",border:"solid",alignItems:"center"}}>
      <input type="text" placeholder="Search" style={{border:"none",width:"500px",height:"50px" }}></input>
      <i class="fa-solid fa-magnifying-glass"></i>
 </div>
  )
 }
 var person=[{
  image:one,
  pname:"Nick johns",
  desc:"life is beautiful enjoy it",
  subs:1134
 },
 {
  image:two,
  pname:"Sushan",
  desc:"Are you going to school tommorrow",
  subs:907
 },
 {
  image:three,
  pname:"Akram",
  desc:"goal has no end",
  subs:907
 },{
  image:four,
  pname:"Tamara Suile",
  desc:"Are you going to buisnesstrip next week",
  subs:907
 },{
  image:five,
  pname:"Caroline Nexon",
  desc:"i suggest to start new buissness soon",
  subs:907
 },{
  image:six,
  pname:"Patrick cooler",
  desc:"will get back tommorrow",
  subs:907
 }
 ,{
  image:seven,
  pname:"Rohit",
  desc:"how are you",
  subs:907
 }
 ,{
  image:eight,
  pname:"Pooja",
  desc:"shall we go for shopping",
  subs:907
 }
]
 function Details(props)
 {
  return(
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"solid 1px gery"}}>
      
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:"20px"}}>
        <img  src={props.image} alt="poto" style={{width:"50px",height:"50px"}}></img>
      <div >
        <h1>{props.pname}</h1>
        <p>{props.desc}</p>
      </div>
      </div>
      <div>
        <p>{props.subs}</p>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
  )
 }
 root.render(<div style={{width:"500px",height:"500px"}}>
  <Search></Search>
  <div >
  {
    person.map(function(item){
      return <Details image={item.image} pname={item.pname}  desc={item.desc} subs={item.subs}></Details>
    }
  
  )
  }</div>
  </div>
 )