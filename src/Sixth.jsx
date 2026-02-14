import React, { useEffect, useState } from "react";
import axios from "axios";
const Sixth=()=>{
  const [data,setdata]=useState([]);
  const [id,setid]=useState("");
  const [check1,setcheck1]=useState(false);
  const [check2,setcheck2]=useState(false);
  const [datai,setdatai]=useState();
   const [title,settitle]=useState("");
   const [price,setprice]=useState("");
   const [description,setdescription]=useState("");
   const [category,setcategory]=useState("");
   const [rate,setrate]=useState("")
   const [count,setcount]=useState("");

   const AddData=async()=>{
    try{
    const payload={
      id,
      title,
      price,
      description,
      category,
      rate,
      count
    }
    await axios.post("https://fakestoreapi.com/products",payload)
    setdata([...data,payload]);
  }
  catch(err) {
  console.log("Data cannot be Added",err.message);
}
   }
  const GetData=async()=>{
    try{
  await axios.get("https://fakestoreapi.com/products")
  .then((res)=>{
    setdata(res.data);
    setcheck1(true);
    setcheck2(false);
  })
}
catch(err) {
  console.log("Data not found",err.message);
}
}
const ShowAll=()=>{
  GetData();
}
const GetDataId=async()=>{
   try{
  await axios.get(`https://fakestoreapi.com/products/${id}`)
  .then((res)=>{
    setdatai(res.data);
    setcheck2(true);
    setcheck1(false)
  })
}
catch(err) {
  console.log("Data not found",err.message);
}
}
const DeleteData=async(index)=>{
  try{
  await axios.delete(`https://fakestoreapi.com/products/${index}`)
 const ndata=data.filter((_,id)=>id!==index);
 setdata(ndata);
}
catch(err) {
  console.log("Data cannot be deleted",err.message);
} 
}
useEffect(()=>{
  GetData();
},[]);

  return(

    <div>
      <input
       type="number"
       name="id"
       value={id}
       onChange={(e)=>setid(e.target.value)}
       
      />
      <br/>
      <br/>
       <input
       type="text"
       name="title"
       value={title}
       onChange={(e)=>settitle(e.target.value)}
       placeholder="Enter Title"
      />
      <br/>
      <br/>
        <input
       type="number"
       name="price"
       value={price}
       onChange={(e)=>setprice(e.target.value)}
       placeholder="Enter Price"
      />
      <br/>
      <br/>
        <input
       type="text"
       name="description"
       value={description}
       onChange={(e)=>setdescription(e.target.value)}
       placeholder="Enter description"
      />
      <br/>
      <br/>
        <input
       type="text"
       name="category"
       value={category}
       onChange={(e)=>setcategory(e.target.value)}
       placeholder="Enter category"
      />
      <br/>
      <br/>
  <input
       type="number"
       name="rate"
       value={rate}
       onChange={(e)=>setrate(e.target.value)}
       placeholder="Enter rate"
      />
<br/>
      <br/>
      <input
       type="number"
       name="count"
       value={count}
       onChange={(e)=>setcount(e.target.value)}
       placeholder="Enter count"
      />
      <br/>
      <br/>
 <button onClick={()=>GetDataId()}>Enter ID</button>
 <br/>
      <br/>
  <button onClick={()=>ShowAll()}>ShowAll</button>
  <br/>
      <br/>
    <button onClick={()=>AddData()}>ADD Item</button>
   {
      check2&&datai&&(
      
        <div>
        
         <p>title:-{datai.title}</p>
         <p>price:-{datai.price}</p>
         <p>description:-{datai.description}</p>
         <p>category:-{datai.category}</p>
         <img src={datai.image} alt="image"/>
         <p>Rate:-{datai.rating.rate}</p>
         <p>Count:-{datai.rating.count}</p>
         </div>
       
      )
     }
     {
      check1&&data.map((e,index)=>{
        return(
        <div key={index}>
         <p>id:-{e.id}</p>
         <p>title:-{e.title}</p>
         <p>price:-{e.price}</p>
         <p>description:-{e.description}</p>
         <p>category:-{e.category}</p>
         <img src={e.image} alt="image"/>
         {/* <p>Rate:-{e.rating.rate}</p>
         <p>Count:-{e.rating.count}</p> */}
        <button onClick={()=>DeleteData(index)}>Delete Item</button>
         <hr/>
          </div>
          
        )
      })
     }
   
    </div>
  )
}
export default Sixth;