import React, {useState, useMemo} from "react";
import "./style.css";

export default function App() {

const [count, setCount] = useState(0)
const [minus, setMinus] = useState(0)


function gumarel() {
  setCount(count +1)
}

function hanum() {
  setMinus(minus -1)
}


// function boolean() {
//   let i = 0
// while(i < 300000000) {
//   i++
// }
//  return count % 2  === 0

  // if(count % 2){
  //   return true
  // }else{
  //   return false;
  // }
// }
const boolean = useMemo(() => {
  let i = 0
  while(i < 300000000) {
    i++
  }
   return count % 2  === 0

}, [minus, count]) 


  return (
    <div>
      <button onClick={gumarel}>Plus {count} </button>
      <span>{boolean ? "even": "odd"}</span>
      <button onClick={hanum}>Minus {minus}</button>
    </div>
  );
}
