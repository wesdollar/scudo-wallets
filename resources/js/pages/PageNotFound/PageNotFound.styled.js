import styled from "styled-components";
import { colors } from "../../constants/colors";
import { fontSize } from "../../constants/fontSizes";

export const StyledContainer = styled.div`
  margin-top: 100px;

  h1 {
    color: ${colors.black};
  }

  .large-text {
    font-size: ${fontSize.medium};
  }

  .small-text {
    font-size: ${fontSize.small};
  }
`;
