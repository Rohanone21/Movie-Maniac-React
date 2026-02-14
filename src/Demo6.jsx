
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Demo6.css";

const Demo6 = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [cat, setcat] = useState("");
  const [nprice, setnprice] = useState("");
const [sorts,setsorts]=useState("");
const  [text,settext]=useState("");
const [showImgId,setshowImgId,]=useState(null);
const [showDescId, setShowDescId] = useState(null);

 
  const GetData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setdata(res.data);
  };

  const DeleteData = async (id) => {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    setdata(data.filter(item => item.id !== id));
  };

  const SearchData = () => {
    setdata(data.filter(k => k.id === Number(search)));
    setsearch("");
  };

  const SearchCategory = () => {
    setdata(data.filter(k => k.category === cat));
  };

  const GetByPrice = () => {
    const ndata=data.filter(k => k.price >= nprice);
 
    setdata(ndata);
  };
const SortPriceAsc=()=>{
  const ndata=[...data].sort((a,b)=>a.price-b.price);
  setdata(ndata);
}
const SortPriceDesc=()=>{
  const ndata=[...data].sort((a,b)=>b.price-a.price);
  setdata(ndata);
}

const SortTitleAsc=()=>{
  const ndata=[...data].sort((a,b)=>a.title.localeCompare(b.title));
  setdata(ndata);
}
const SortTitleDesc=()=>{
  const ndata=[...data].sort((a,b)=>b.title.localeCompare(a.title));
  setdata(ndata);
}

const SearchProduct=()=>{
  const ndata=data.filter(k=>k.title.toLowerCase().includes(text.toLowerCase()));
  setdata(ndata);
  settext("");
}
const ShowDes=(id)=>{

  setShowDescId(prev=>(prev===id?null:id))
}
const ShowImage=(id)=>{
  setshowImgId(prev=>(prev===id?null:id))
}
  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="app">
  
      <header className="header">
        <h2>🛒 Store</h2>

         <input
          type="text"
          placeholder="Search by Product name"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />

<button onClick={SearchProduct}>Search product name</button>

        <input
          type="number"
          placeholder="Search by ID"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={SearchData}>Search</button>

        <button className="reset" onClick={GetData}>All Products</button>
      </header>

      {/* FILTER BAR */}
      <div className="filters">
        <select value={cat} onChange={(e) => setcat(e.target.value)}>
          <option value="">Select Category</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewellery</option>
        </select>

        <button onClick={SearchCategory}>Filter</button>

        <select value={nprice} onChange={(e) => setnprice(e.target.value)}>
          <option value="">Price</option>
          <option value="20">₹20+</option>
          <option value="100">₹100+</option>
          <option value="200">₹200+</option>
        </select>

        <button onClick={GetByPrice}>Apply</button>


<select
value={sorts}
onChange={(e)=>{
  const value=e.target.value;
  setsorts(value);

  if(value==="a") SortPriceAsc();
  if(value==="b") SortPriceDesc();
  if(value==="c") SortTitleAsc();
  if(value==="d") SortTitleDesc();

}}
>
  <option value="">Sort</option>
   <option value="a">Sort Price Ascending</option>
      <option value="b">Sort Price Descending</option>
      <option value="c">Sort title Ascending</option>
      <option value="d">Sort title Descending</option>
</select>


    
      </div>

      {/* PRODUCT GRID */}
      <div className="container">
        {data.map((e,index) => (
          <div className="card" key={index}>
            <img src={e.image} alt={e.title} />
            <h4>{e.title}</h4>
            <p className="price">₹ {e.price}</p>
            <p className="category">{e.category}</p>
 

<button onClick={()=>ShowDes(e.id)}>
  {
    showDescId===e.id?"Hide Description":"Show Description"
  }
</button>
{
  showDescId===e.id&&(
     <p className="description">{e.description}</p>
  )
}
 <button onClick={()=>ShowImage(e.id)}>{
  showImgId==e.id?"Hide Product Image":"Show Product Image"
  }</button>
 {
  showImgId===e.id&&(
    <iframe
     src={e.image}
   className="image-frame"
  title="product-image"
    />
  )
 }
            <button onClick={() => DeleteData(e.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo6;
