import React, { useState } from "react";

const Nine=()=>{

const [count,setcount]=useState(0);
const [show,setshow]=useState(false);
const [show2,setshow2]=useState(false);
const [count2,setcount2]=useState(0);
const [show3,setshow3]=useState(false);
const [count3,setcount3]=useState(0);


const Toogle=()=>{
const k=Number(count);
if(k%2===0){
 setshow(true)
 setcount((count)=>count+1);


}
else{
   setshow(false)
 setcount((count)=>count+1);


}
 
}
const Toogle2=()=>{
const k=Number(count2);
if(k%2===0){
 setshow2(true)
 setcount2((count2)=>count2+1);


}
else{
   setshow2(false)
 setcount2((count2)=>count2+1);


}
 
}

const Toogle3=()=>{
const k=Number(count3);
if(k%2===0){
 setshow3(true)
 setcount3((count3)=>count3+1);


}
else{
   setshow3(false)
 setcount3((count3)=>count3+1);


}
 
}

  return(
    <div>
   <button onClick={()=>Toogle()}>What is React?</button>
   {
    show&&(
      <div>
      <p>React is a JavaScript library for building user interfaces.</p>
      
      </div>
      
    )
    

   }


<br/>
<br/>
      <button onClick={()=>Toogle2()}>What is JSX?</button>
       {
      show2&&(
      <div>
      <p>JSX is a syntax extension for JavaScript used with React.</p>
       
     
      </div>
    )
       }
       <br/>
       <br/>
 <button onClick={()=>Toogle3()}>What is useState?</button>
       {
      show3&&(
      <div>
      <p>useState is a React Hook that allows functional components to manage state.</p>
       
     
      </div>
    )
       }
    </div>
  )
}
export default Nine;