
import React, { useState } from "react";
const Demo4=()=>{
const [val,setval]=useState("");
const [items,setitems]=useState([]);

const users={
    happy: "😊",
  sad: "😢",
  love: "❤️",
  angry: "😠",
  surprised: "😲",
  laugh: "😂",
  cool: "😎",
  tired: "😴",
  excited: "🤩",
  bored: "🥱",
  scared: "😱",
  confused: "😕",
  wow: "😮",
  cry: "😭",
  nervous: "😬",
  calm: "😌",
  // Greetings
  hello: "👋",
  bye: "👋",
  goodnight: "🌙",
  night: "🌙",
  // Activities
  party: "🥳",
  dance: "💃",
  music: "🎵",
  sleep: "😴",
  work: "💼",
  study: "📚",
  // Weather & Nature
  sun: "☀️",
  rain: "🌧️",
  snow: "❄️",
  cloud: "☁️",
  fire: "🔥",
  tree: "🌳",
  flower: "🌸",
  // Food & Drink
  pizza: "🍕",
  burger: "🍔",
  coffee: "☕",
  cake: "🍰",
  apple: "🍎",
  beer: "🍺",
  // Animals
  dog: "🐶",
  cat: "🐱",
  bird: "🐦",
  fish: "🐟",
  horse: "🐴",
  // Objects & Symbols
  phone: "📱",
  laptop: "💻",
  heart: "❤️",
  star: "⭐",
  thumbs_up: "👍",
  thumbs_down: "👎",
  ok_hand: "👌",
  // Misc
  money: "💰",
  gift: "🎁",
  car: "🚗",
  bike: "🚲",
  airplane: "✈️",
  clock: "⏰",
}

const  StoreData=()=>{
  setitems(val.toLowerCase().split(" "));
}

return(
  <div>
 <textarea
 type="text"
  name="val"
  value={val}
  rows={9}
  cols={50}
  onChange={(e)=>setval(e.target.value)}
  placeholder="Enter Text"
 />

 <button onClick={()=>StoreData()}>Click here </button>
 {
   items.map((e,index)=>{
    return(
    <div key={index}>
      <h2>{users[e]??e}</h2>
   
      </div>
    )
   })
 }
  </div>
)
}
export default Demo4;