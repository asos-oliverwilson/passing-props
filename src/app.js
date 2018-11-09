import React from "react";
import Title from "./title";
import Paragraph from "./paragraph";
import Image from "./Image";
export default function App() {
  const titleDescription = "this is a destructured prop.";
  const paragraphDescription = "this is not a destructured prop.";
  return (
    <div>
      <Title name={"Om"} description={titleDescription} />
      <Paragraph description={paragraphDescription} />
      <Image url={"https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"} />
    </div>
  );
}
