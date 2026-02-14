import React, { useState } from "react";
const TextConverter=()=>{
  const [text,settext]=useState("");
  const [word,setword]=useState();
  const [char,setchar]=useState();

 const ClearText=()=>{
  settext("");
 }


const ToUpper=()=>{
  const ndata=text.toUpperCase();
  settext(ndata);
}

const ToLower=()=>{
  const kdata=text.toLowerCase();
  settext(kdata);
}

 const ReverSentence=()=>{
  let res="";
  for(let i=text.length-1;i>=0;i--){
    res+=text[i];
  }
  settext(res);
 }

 const ClearSpace=()=>{
    let res="";
  for(let i=0;i<text.length;i++){
    if(text[i]!=" "){
    res+=text[i];
  }
}
  settext(res);
 }
 const CountWords=()=>{
  const arr=text.split(" ");
  setword(arr.length);
 }

 const Countchars=()=>{
   const arr=text.split(" ");
   let cnt=0;
  for(let i=0;i<arr.length;i++){
    let res2=arr[i];
    for(let j=res2.length-1;j>=0;j--){
   cnt++;
    }
  }
  setchar(cnt);
 }

 const ReverseWords=()=>{
  const arr=text.split(" ");
  let res="";
  for(let i=0;i<arr.length;i++){
    let res2=arr[i];
    for(let j=res2.length-1;j>=0;j--){
    res+=res2[j];

    }
    res+=" ";
  }
  settext(res);
 }
return(
  <div>
    <textarea
    type="text"
    name="text"
    value={text}
    onChange={(e)=>settext(e.target.value)}
    placeholder="Enter Text"
    />
<br/>
<br/>
<button onClick={()=>ClearText()}>Clear</button>
<br/>
<br/>
<button onClick={()=>ToUpper()}>To Upper Case</button>
<br/>
<br/>
<button onClick={()=>ToLower()}>To Lower Case</button>
<br/>
<br/>
<button onClick={()=>ReverSentence()}>Rever Sentence</button>
<br/>
<br/>
<button onClick={()=>ClearSpace()}>Clear Space</button>
<br/>
<br/>
<button onClick={()=>ReverseWords()}>Reverse Words</button>
<br/>
<br/>
 <button onClick={()=>CountWords()}>Count Words</button> 
 <br/>
<br/>
<h2>Word Count:-{word}</h2>
<br/>
<br/>
<br/>
 <button onClick={()=>Countchars()}>Count Chars</button> 
 <br/>
 <br/>
<h2>Count chars:-{char}</h2>

  </div>
)
}
export default TextConverter;