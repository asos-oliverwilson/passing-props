import React from "react";
const Title = ({ name, description }) => {
  return (
    <h1 className="Title">
      Hello {name}, {description}
    </h1>
  );
};

export default Title;
