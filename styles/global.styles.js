import React from "react";
import styled from "styled-components/native";
import { scale } from "react-native-size-matters";
import colors from "../utils/colors";

export const Divider = styled.View`
  border-bottom-width: ${scale(0.5)}px;
  border-bottom-color: ${colors.gray[500]};
`;

export const RowCenterView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
