import React from "react";
import { styled } from "@stitches/react";
import { IProgrammer } from "../../types/programmer";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface CardProps {
  programmerData: IProgrammer;
}

const Card = ({ programmerData }: CardProps) => {
  const image = getImage(programmerData.image) as IGatsbyImageData;

  return (
    <CardContainer>
      <GatsbyImage alt={programmerData.name} image={image} />
      <h1>{programmerData.name}</h1>
      <p>{programmerData.description}</p>
      <p>{programmerData.mainLanguage}</p>
    </CardContainer>
  );
};

const CardContainer = styled("div", {
  border: "1px solid black",
  padding: "1rem",
});

export default Card;
