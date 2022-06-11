import React from "react";
import { StyledSearchButton } from "../../../styles/pokemon/pokemon-styles";

interface SearchButtonProps {
  type: "submit";
}
function SearchButton({ type }: SearchButtonProps) {
  return <StyledSearchButton type={type}>search pokemon</StyledSearchButton>;
}

export default SearchButton;
