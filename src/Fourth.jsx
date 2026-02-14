import React, { useState } from "react";

const Fourth=()=>{
  const [data,setdata]=useState([]);
  const [task,settask]=useState("");
  const [editIndex,setEditIndex]=useState(null);

  const AddTask=()=>{
   if(editIndex!==null){
    const newData=[...data];
    newData[editIndex]=task;
    setdata(newData);
    setEditIndex(null);
   }
    else{
    setdata([...data,task]);
    settask("");
    
    }
  
}
const EditTask=(index)=>{
  settask(data[index]);
  setEditIndex(index);
}
  const DeleteTask=(index)=>{
    const ndata=data.filter((_,i)=>i!==index);
    setdata(ndata);
  }
  return(
    <div>
    <input
    type="text"
    name="input"
    value={task}
    onChange={(e)=>settask(e.target.value)}
    />
    <button onClick={()=>AddTask()} >ADD Task</button>
    {
      data.map((item,index)=>{
        return(
        <div key={index}>
        <p>{item}</p>
        <button onClick={()=>DeleteTask(index)}>Delete Task</button>
        <button onClick={()=>EditTask(index)}>Update Task</button>
        </div>
        )
      })
    
    }
  
    </div>
  )
}
export default Fourth;








