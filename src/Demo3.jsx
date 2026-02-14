import React, {  useState } from "react";
const Demo3=()=>{
  const [val,setval]=useState(0);
  const [count1,setcount1]=useState(0);
  const [count2,setcount2]=useState(0);
  const [rock,setrock]=useState(0);
  const [paper,setpaper]=useState(1);
  const [siccors,setsiccors]=useState(2);
  const [r,setr]=useState(false);
  const [p,setp]=useState(false);
  const [s,sets]=useState(false);


  const GetData=()=>{
   
  const chars="012";
  let res="";
  for(let i=0;i<1;i++){
 res+=chars[Math.floor(Math.random()*chars.length)]
  }
  setval(res);
  }
  useState(()=>{
GetData();
  },[])

  const ComputerBtn=()=>{
    setInterval(() => {
      GetData();
    }, 1000);
    
  }
  const Rock=()=>{

       setr(true);
       setp(false);
       sets(false);
   if ((Number(rock)===0&&Number(val)===1)||(Number(rock)===0&&Number(val)===2)){
    setcount1((count1)=>count1+1);
    if(Number(count2)===0){
      setcount2(0)
    }
    else{
    setcount2((count2)=>count2-1);
    }
   }
  }
 const Paper=()=>{
  setp(true);
  setr(false);
  sets(false);
  if((Number(paper)===1&&Number(val)===0)||(Number(paper)===1&&Number(val)===2)){
    if(Number(count2)===0){
      setcount2(1)
    }
    else{
    setcount2((count2)=>count2+1);
    }
  }
 }
 const Siccors=()=>{

  sets(true);
  setr(false);
  setp(false);
    if(Number(siccors)===2&&Number(val)===1){
       setcount1((count1)=>count1+1);

    }

    if(Number(siccors)===2&&Number(val)===0){
      if(Number(count2)===0){
      setcount2(1)
    }
    else{
    setcount2((count2)=>count2+1);
    } 
    }
  }

  return(
    <div>
    
      <button onClick={()=>Rock()}>Rock</button>
      <button onClick={()=>Paper()}>Paper</button>
       <button onClick={()=>Siccors()}>Siccors</button>
     
       <button onClick={()=>ComputerBtn()}>Click here for computer</button>
     
       {
        r&&(
          <div>
            <h3>You Selected:-Rock</h3>
            </div>
        )
       }
   
       {
        p&&(
          <div>
            <h3>You Selected:-Paper</h3>
            </div>
        )
       }
       
       {
        s&&(
           <div>
            <h3>You Selected:-Sissors</h3>
            </div> 
        )
       }
       <h3>{Number(val)===0?<h4>Computer Selected:-Rock</h4>:" "}</h3>
<h3>{Number(val)===1?<h4>Computer Selected:-Paper</h4>:" "}</h3>
<h3>{Number(val)===2?<h4>Computer Selected:-Sissors</h4>:" "}</h3>
       <p>Your Score:-{count1}</p>
       <p> Computer Score:-{count2}</p>
       <br/>
       
    </div>
  )
}
export default Demo3;