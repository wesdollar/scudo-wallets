import React from "react";
import { StyledLoadingContainer } from "./Loading.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <StyledLoadingContainer>
      <div>
        <FontAwesomeIcon icon={faSpinner} spin size="5x" />
      </div>
    </StyledLoadingContainer>
  );
};

export default Loading;
