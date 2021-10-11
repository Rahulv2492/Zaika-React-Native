import React from "react";
import styled from "styled-components/native";
import { colors, typography } from "./../../../utils";
import { scale } from "react-native-size-matters";

export const CustomText = styled.Text`
  color: ${({ color }) => color || colors.black[700]};
  font-size: ${({ size }) =>
    scale(typography.fontSizes[size]) || scale(typography.fontSizes.sm)}px;
  ${({ weight }) =>
    weight &&
    `font-weight: ${
      typography.fontWeights[weight] || typography.fontWeights.light
    };`}
`;

export const PriceText = styled(CustomText)`
  ${({ lineThrough }) =>
    lineThrough &&
    `text-decoration-line: line-through;
    color:${colors.gray[500]}
  `}
`;
