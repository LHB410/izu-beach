import React from "react";

export default function BeachCard(props) {
  console.log(props)
  return(
    <div>


      <li className="item" key={props.id}>
        {props.name}
        <br />
        {props.description}
      </li>

    </div>
  )
}
