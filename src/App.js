import { useState } from "react";
import "./styles.css";
import Child1 from "./Child1";
import Child2 from "./Child2";
export default function App() {
  const [name, setName] = useState("rutuja");
  const [surname, setSurname] = useState("pharanade")
  console.log("updating parent")
  return (
    <div className="App">
      <button onClick={()=> setName("ruts")}>{name}</button>
      <button onClick={()=> setSurname("p")}>{surname}</button>
      <Child1 name={name}/>
      <Child2 surname={surname}/>
    </div>
    
  );
}
