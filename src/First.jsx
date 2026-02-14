import React, { useState } from "react";

const First=()=>{
  const [data,setdata]=useState(false);

  return(

    <div>
    <button onClick={()=>setdata(!data)}>{
      data?"show":"Hide"
    }</button>
    {
      data&&<p>Welcome To React</p>
    }
    </div>
  )
}
export default First;