import { useState } from "react";

const User = ({name,location}) => {
//  props.name,props.location destructuring for {name,location}

const [count,setCount] = useState(0);


return (
    
    <div className = "user_card">
        <h1>Count={count}</h1>
       <button
       onClick={() => {
        setCount(count+1);
       }}
       >IncreaseCount</button>
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
    </div>
);

}

export default User;