import React from "react";

export default function Gif({title, id, url}) {
  return (
    <div>
      <h4>ID: {id}</h4>
      <small>{title}</small>
      <img alt={title} src={url} />
    </div>
  );
}
