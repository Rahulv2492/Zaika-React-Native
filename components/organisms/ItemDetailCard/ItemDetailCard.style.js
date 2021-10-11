import React from "react";
import styled from "styled-components/native";
import { colors, typography } from "./../../../utils";
import { scale, verticalScale } from "react-native-size-matters";

export const CardWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-vertical: ${verticalScale(25)}px;
  padding-horizontal: ${scale(10)}px;
  background-color: ${colors.white[900]};
`;
