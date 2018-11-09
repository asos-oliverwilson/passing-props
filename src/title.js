import React from "react";
export default function Title({ name, description }) {
  return (
    <h1 className="Title">
      Hello {name}, {description}
    </h1>
  );
}
