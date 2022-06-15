import React from "react";
import {
  CenterContainer,
  StyledErrorMessage,
} from "../../../styles/pokemon/pokemon-styles";

const Error = () => {
  return (
    <CenterContainer>
      <StyledErrorMessage>
        ERROR!
        <br />
        sorry man, <br />
        you sure you got the right pokemon id?
      </StyledErrorMessage>
    </CenterContainer>
  );
};

export default Error;
