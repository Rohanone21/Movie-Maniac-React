import React, { useState } from "react";
const Eleven=()=>{
  const[data,setdata]=useState([]);
   const [task,settask]=useState("");
   
   const AddData=()=>{
    setdata([...data,task]);
    settask("");
   }
   const DeleteData=(index)=>{
    const ndata=data.filter((_,id)=>id!==index);
    setdata(ndata);
   }
  return(
    <div>
      <input
      type="text"
      name="task"
      value={task}
     onChange={(e)=>settask(e.target.value)}
     placeholder="Enter Data"
      />
    <button onKeyDown={()=>AddData()}>Add Chip</button>
        {
          data.map((e,index)=>{
            return(
            <div key={index}>
             <p>{e}</p>
             <button onClick={()=>DeleteData(index)}>X</button>
              </div>
            )
          })
        }
    </div>
  )
}
export default Eleven;