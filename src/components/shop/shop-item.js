import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
        // -Image
        // -Description
        // -ID

  const { id, description, image } = props.item;

  return (
    <div>
      <img src={image} />
      <div>{description}</div>
      <Link to ={`/shop/${id}`}>Link</Link>
    </div>
  );
}