import React from "react";

export default function Card(props) {
  return (
    <div className="card--location">
      <span>{props.item.location}</span>
      <span>{props.item.googleMapsUrl}</span>
    </div>
  );
}
