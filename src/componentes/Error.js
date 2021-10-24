import React from "react";

export default function Error({ mensaje }) {
  return (
    <div className="error">
      <p>{mensaje}</p>
    </div>
  );
}
