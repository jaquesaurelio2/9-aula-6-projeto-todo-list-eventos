import React from "react";

export default function Item({ title }) {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" />
      <p>{title}</p>
    </div>
  );
}
