import {useState} from 'react'
import { GiAbstract008 } from "react-icons/gi";

    const reactionArray = [

    "😂",
    "😊",
    "🤣",
    "😒",
    "😁",
    "👍",
    "💕",
    "❤️",
    "🤷‍♂️",
    "👌"
];
 function Arraytask(){
    const [count, setCount]=useState(0);

    const handleClick = ()=> {
        if ( count < reactionArray.length - 1 ){
            setCount(count + 1);
        }
    };
 
  return (
    <div className="container">
        <h2>
            likes:{count}{reactionArray[count]}
        </h2>
        <GiAbstract020 
        size={40}
        onClick={handleClick}
        style={{cursor:"pointer"}}
        />
    </div>

  );
}


export default Arraytask