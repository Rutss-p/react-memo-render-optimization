import React from "react";

const Child2 = React.memo(({surname})=>{
    console.log("Child2 rendered");
    return <h1>{surname}</h1>}
)
export default Child2;