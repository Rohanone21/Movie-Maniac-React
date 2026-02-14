import React, { useEffect, useState } from "react";
const Demo5=()=>{
  const [title,settitle]=useState("");
  const [amount,setamount]=useState(0);
  const [data,setdata]=useState([]);
    const [type,settype]=useState("Income");
    const [search,setsearch]=useState("");
    const [visible,setvisible]=useState(false);

  const newTransaction={
    title,
    amount,
    type  
  }
  
  const AddTransaction=()=>{
  setdata([...data,newTransaction]);
  }
 
  const DeleteTransaction=(index)=>{
    const ndata=data.filter((_,i)=>i!==index);
    setdata(ndata);
  }
  const AddSearch=(search)=>{
    const  ndata=data.filter(k=>k.title===search);
    setdata(ndata);
  }
  const ShowAll=()=>{
    
    setvisible(true);
  }
  useState(()=>{
    ()=>ShowAll();
  },[])
 
  return(
    <div>
   <input
   type="text"
   name="title"
   value={title}
   onChange={(e)=>settitle(e.target.value)}
   placeholder="Title"
   />
   <br/>
    <br/>
      <input
   type="number"
   name="amount"
   value={amount}
   onChange={(e)=>setamount(e.target.value)}
   placeholder="Amount"
   />
   <br/>
    <br/>

    <select
        value={type}
    onChange={(e)=>settype(e.target.value)}
    >
      <option value="income">Income</option>
     <option value="expense">Expense</option>
    </select>
<br/>
    <br/>
    <button onClick={()=>AddTransaction()}>Add Transaction</button>
    <button onClick={()=>ShowAll()}>Show All Transaction</button>

    <br/>
    <br/>
    <input
    type="text"
    name="search"
    value={search}
    onChange={(e)=>setsearch(e.target.value)}
    placeholder="Search"
    />
    <button onClick={()=>AddSearch(search)}>Search</button>

{
  data.map((e,index)=>{
    return(
    <div key={index}>
<p>{e.title}</p>
<p>{e.amount}</p>
<p>{e.type}</p>
<button onClick={()=>DeleteTransaction(index)}>Delete</button>
<hr/>
      </div>
    )
  })

}


{
  visible&&data.map((e,index)=>{
    return(
    <div key={index}>
<p>{e.title}</p>
<p>{e.amount}</p>
<p>{e.type}</p>
<button onClick={()=>DeleteTransaction(index)}>Delete</button>
<hr/>
      </div>
    )
  })

}
    </div>
  )
}
export default Demo5;