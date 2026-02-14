import React, { useEffect, useState } from "react";
import axios from "axios";

const Fifth = () => {
  const [data, setdata] = useState([]);
  const [check1, setcheck1] = useState(false);
  const [check2, setcheck2] = useState(false);
  const [datai, setdatai] = useState(null);
  const [id, setid] = useState("");
  const [postid,setpostid]=useState("");
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [body,setbody]=useState("");

  const [editindex, setindex] = useState(null);
  const [editbody, seteditbody] = useState("");

  // READ ALL
  const CreateData=async()=>{
    try{
    const payload={
      id,
      postid,
      name,
      email,
      body
    }
    await axios.post("https://jsonplaceholder.typicode.com/comments",payload)
    setdata([...data,payload]);
  }
  catch(err){
    console.log("Data could not Added",err.message);
  }
  }
  const Read = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setdata(res.data);
      setcheck1(true);
      setcheck2(false);
    } catch (err) {
      console.log("Data not found", err.message);
    }
  };

  // READ BY ID
  const ReadId = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      setdatai(res.data);
      setcheck2(true);
      setcheck1(false);
    } catch (err) {
      console.log("Data not found", err.message);
    }
  };

  // DELETE
  const DeleComment = async (commentId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/comments/${commentId}`
      );
      setdata(data.filter((e) => e.id !== commentId));
    } catch (err) {
      console.log("Cannot be deleted", err.message);
    }
  };

  // UPDATE
  const UpdateComment = async (index) => {
    try {
   
      const comment= data[index];
      await axios.put(`https://jsonplaceholder.typicode.com/comments/${comment.id}`,{...comment,body:editbody})

      const newData=[...data];
      newData[index]={...comment,body:editbody}
      setdata(newData);
      setindex(null);
      seteditbody("");
    } catch (err) {
      console.log("Update failed", err.message);
    }
  };

  useEffect(() => {
    Read();
  }, []);

  return (
    <div>
      {/* SEARCH BY ID */}
      <input
        type="number"
        value={id}
        onChange={(e) => setid(e.target.value)}
        placeholder="Enter ID"
      />
      <br/>
        <br/>
        <input
        type="number"
        value={postid}
        onChange={(e) => setpostid(e.target.value)}
        placeholder="Enter postid ID"
      />


         <br/>
        <br/>
        <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter Name"
      />
        <br/>
        <br/>
        <input
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="Enter Email"
      />


  <br/>
        <br/>
        <input
        type="text"
        value={body}
        onChange={(e) => setbody(e.target.value)}
        placeholder="Enter Body"
      />
      
      <button onClick={ReadId}>Search</button>
       <button onClick={()=>CreateData()}>Create Comment</button>
      {/* SINGLE COMMENT */}
      {check2 && datai && (
        <div>
          <p>PostId: {datai.postId}</p>
          <p>ID: {datai.id}</p>
          <p>Name: {datai.name}</p>
          <p>Email: {datai.email}</p>
          <p>Body: {datai.body}</p>
          <hr />
        </div>
      )}

      {/* ALL COMMENTS */}
      {check1 &&
        data.map((e, index) => (
          <div key={e.id}>
                  <p>PostId: {e.postId}</p>
            <p>ID: {e.id}</p>
            <p>Name: {e.name}</p>
            <p>Email: {e.email}</p>

            {editindex === index ? (
              <input
                value={editbody}
                onChange={(ev) => seteditbody(ev.target.value)}
              />
            ) : (
              <p>Body: {e.body}</p>
            )}

            <button onClick={() => DeleComment(e.id)}>Delete</button>

            {editindex === index ? (
              <button onClick={() => UpdateComment(index)}>Save</button>
            ) : (
              <button
                onClick={() => {
                  // setindex(index);
                  // seteditbody(e.body);
                  setindex(index)
                  seteditbody(e.body)
                }}
              >
                Update
              </button>
            )}
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Fifth;
