import React from "react";
import { useState } from "react";

const Second=()=>{
  const [data,setdata]=useState([]);
  const [task,settask]=useState("");

 const AddTask=()=>{
  if (task.trim() === "") return;
setdata([...data,task]);
 settask("");
 }
 const RemoveTask=(index)=>{
const newtask=data.filter((_,i)=>i!==index);
setdata(newtask);
 }
  return(
    <div>
     <input
     type="text"
     name="task"
     value={task}
     onChange={(e)=>settask(e.target.value)}
     placeholder="Add Task"
     />
     <button onClick={()=>AddTask()}>ADD Task</button>
     {
      
      data.map((item,index)=>{
       return(
    <div key={index}>
   
      <h2>{item}</h2>
     <button onClick={()=>RemoveTask(index)}>X</button>
      </div>
       )
      })
     }
    </div>
  )
}
export default Second;