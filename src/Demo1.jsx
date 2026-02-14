import React, { useEffect, useState } from "react";

const Demo1=()=>{
  const [val,setval]=useState("");
  const [data,setdata]=useState("");

      const GetCode=()=>{
      const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpoqrstuvwxyz";
     let res="";
     for(let i=0;i<5;i++){
      res+=chars[Math.floor(Math.random()*chars.length)]
     }
     setval(res);
    }
    useState(()=>{
      GetCode();
    },[])
  
    
    const Regenerate=()=>{
      GetCode();
    }
  
   
  return(
  
    <div>
    <h1>{val}</h1>
 <input
 type="text"
 name="data"
 val={data}
 onChange={(e)=>setdata(e.target.value)}
placeholder="Enter captcha"
   />
<br/>
<br/>
     {
      data===val?<h3>Correct</h3>:""
    }
     <button onClick={()=>Regenerate()}>Regenerate</button>
    </div>
  )
}
export default Demo1;