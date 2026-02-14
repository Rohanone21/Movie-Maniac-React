import React, { useState } from "react";
const Third=()=>{
  const [data,setdata]=useState([
       "Rohan",
    "Amit",
    "Sneha",
    "Pooja",
    "Rahul",
    "Suresh",
    "Anita"
  ]);
  const [stext,searchtext]=useState("");

  return(
    <div>
<input 
type="text"
name="stext"
/>
    </div>
  )
}
export default Third;
