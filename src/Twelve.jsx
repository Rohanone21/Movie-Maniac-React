import React, { useEffect, useState } from "react";
import axios from "axios";

const Twelve=()=>{
  const [data,setdata]=useState([]);
   const [prices,setprices]=useState(0);
   const [cat,setcat]=useState("");
  const GetData=async()=>{
    try{
    await axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      setdata(res.data);
    })
  }
  catch(err){
     console.log("Data not found",err.message);
  }
}
const GetByCategory=async(cat,prices)=>{
  try{
    await axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
     const ndata=res.data.filter((k=>k.category===cat))
     const kdata=ndata.filter((k=>k.price>=prices))
     setdata(kdata);
     
    })
  }
  catch(err){
     console.log("Data not found",err.message);
  }
}
const GetPrice=async(prices,cat)=>{
  await axios.get("https://fakestoreapi.com/products")
  .then((res)=>{
    const ndata=res.data.filter(k=>k.price>=prices)
    const kdata=ndata.filter(k=>k.category===cat);
    setdata(kdata);
  })
}


useEffect(()=>{
  GetData();
},[]);


  return(
    <div>
      <input
      type="text"
      name="cat"
      value={cat}
      onChange={(e)=>setcat(e.target.value)}
      placeholder="Enter Category to search"
      />

         <select
     
      value={cat}
      onChange={(e)=>setcat(e.target.value)}
      
      >
        <option value="men's clothing" >men's clothing</option>
          <option value="jewelery" >jewelery</option>
            <option value="electronics" >electronics</option>
              <option value="women's clothing" >women's clothing</option>
      </select>
      
      <br/>
      <br/>
        <select
     
      value={prices}
      onChange={(e)=>setprices(e.target.value)}
      
      >
        <option value="20" >Above 20</option>
          <option value="50" >Above 50</option>
            <option value="70" >Above 70</option>
              <option value="100" >Above 100</option>
                <option value="150" >Above 150</option>
                  <option value="200" >Above 200</option>
      </select>

    <button onClick={()=>GetPrice(prices,cat)}>Search By Price</button>
 <button onClick={()=>GetByCategory(cat,prices)}>Search By category</button>

{
  data.map((e,index)=>{
    return(
    <div key={index}>
      <p>ID:-{e.id}</p>
      <p>title:-{e.title}</p>
       <p>price:-{e.price}</p>
      <p>description:-{e.description}</p>
      <p>category:-{e.category}</p>
     <img src={e.image} alt="product image"/>
        <p>rate:-{e.rating.rate}</p>
         <p>count:-{e.rating.count}</p> 
      <hr/>
      </div>
    )
  })
}
    </div>
  )
}
export default Twelve;

