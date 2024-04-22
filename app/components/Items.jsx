import React from "react";

const Items = ({data, loading}) =>{
if(loading) {
  return <h1>Loading....</h1>
}
return (

  <>
  {data.map((data, index)=>{
   <div className="displayData" key = {index}>
 <p>{data.date}{data.fileName}</p>
   </div>
  })}

  </>
)
}

export default Items;