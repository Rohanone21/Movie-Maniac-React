import React, { useState } from "react";

const Ten=()=>{
  const [data,setdata]=useState("");
   const [limit,setlimit]=useState(0)
 
  return(
    <div>
      <input
       type="number"
     name="data"
     value={limit}
      onChange={(e)=>setlimit(e.target.value)}
      placeholder="Enter Max Limit"
      />
      <br/>
      <br/>
      <br/>
     <textarea
     type="text"
     name="data"
     value={data}
      onChange={(e)=>setdata(e.target.value)}
      
     />
     {
      <div>
        <p>count:-{Number(data.length)}/{limit}</p>
        </div>
     }
     {
      <div>
        {Number(data.length)>Number(limit)?<p>Limit Exceeded</p>:" " }
      </div>
     }
     
    </div>
  )
}
export default Ten;