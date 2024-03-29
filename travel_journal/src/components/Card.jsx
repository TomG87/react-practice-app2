import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Card(props) {
  return (
    <div>
      <div className="card--location">
        <span>
          <FaLocationDot className="icon" />
          {props.item.location}
        </span>
        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
      </div>
      <br></br>
      <div className="card--title">{props.item.title}</div>
      <br></br>
      <div className="card--dates">
        <span>{props.item.startDate}-</span>
        <span>{props.item.endDate}</span>
      </div>
      <div className="card--description">
        <p>{props.item.description}</p>
      </div>
      <div className="image">
        <img src={props.item.imageUrl} />
      </div>
      <div className="border border-success p-2 border-opacity-10"></div>
    </div>
  );
}
