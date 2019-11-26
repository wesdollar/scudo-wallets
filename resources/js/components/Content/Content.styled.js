import styled, { css } from "styled-components";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";

export const StyledContentContainer = styled.div`
  padding: ${px(gutters.doubleGutter)};

  ${({ alternateBackground }) =>
    alternateBackground &&
    css`
      background: ${colors.mediumGrey};
      color: ${colors.text.primary};
    `}
`;
