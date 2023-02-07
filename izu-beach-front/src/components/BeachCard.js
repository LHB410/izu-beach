import React from "react";

export default function BeachCard(props) {
  return(
    <div>
      <ul>
        {props.beaches.map((beach) => {
          return (
            <li className="item" beach={beach} key={beach.id}>
              <label className="itemDisplay">{beach.name}</label>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
