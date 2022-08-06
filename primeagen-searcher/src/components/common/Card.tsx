import React from "react";
import { styled } from "@stitches/react";
import { IProgrammer } from "../../types/programmer";
import Img from "gatsby-image";

interface CardProps {
  programmerData: IProgrammer;
}

const Card = ({ programmerData }: CardProps) => {
  return (
    <CardContainer>
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
