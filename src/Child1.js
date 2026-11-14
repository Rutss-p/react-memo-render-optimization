import React from "react";

const Child1 = React.memo(({name})=>{
    console.log("Child1 rendered");
    return <h1>{name}</h1>
}
)
export default Child1;