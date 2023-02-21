import React from "react";

export default function BeachCard(props) {
  console.log(props)
  return(
    <div>


      <p className="item" key={props.id}>
        <hr />
        {props.name}
        <br />
        {props.description}
        <br />
        BBQ Friendly: {props.bbq_friendly === true ? "Yes" : "No"}
        <br />
        Parking: {props.parking === true ? "Yes" : "No"}
        <br />
        <br/>
        {props.parking}
        Reviews
        {props.reviews.map(review =>
        <>

          <br />
          <span>{review.screen_name} </span>
          <span>{review.title} </span>
          <span>{review.rating} </span>
          <p>{review.content}</p>
        </>
        )}
      </p>

    </div>
  )
}
