import React, { useState } from "react";
const Demo2=()=>{
  const [data,setdata]=useState([]);
  const [link,setlink]=useState("");
const [frame,showframe]=useState(false);
const [count,setcount]=useState(0);
   const AddImage=()=>{
    setdata([...data,link]);
   }
   const DeleteImage=(index)=>{
    const ndata=data.filter((_,i)=>i!==index);
    setdata(ndata);
   }
   const ShowD=()=>{
    const k=Number(count);
 
    if(k%2==0){
    showframe(false);
    setcount((count)=>count+1);
    }
    else{
      showframe(true);
      setcount((count)=>count+1);
    }
   }

  return(
    <div>
      <input
     type="text"
     name="link"
     value={link}
     onChange={(e)=>setlink(e.target.value)}
     placeholder="Enter Image Link"
      />
      <button onClick={()=>AddImage()}>Add Image</button>
      {
        data.map((e,index)=>{
          return(
         <div key={index}>
          <img src={e} alt="Image" height="70px" width="70px" onClick={()=>ShowD(index)} />

         {
          frame&&(
            <iframe
          src={e}
          title="Fullscreen Image"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none"
      }}

    

          />
          )
         
         }
          <button onClick={()=>DeleteImage(index)}>Delete Image</button>
          </div>
          )
        })
      }

    </div>
  )
}
export default Demo2;







