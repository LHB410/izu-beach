import React from "react";

export default function BeachCard(props) {
  return(
    <div>
      <h1>beaches</h1>
      <p>{props.name}</p>
      <p>{props.addres}</p>
    </div>
  )
}
