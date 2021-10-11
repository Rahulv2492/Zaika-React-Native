import React from "react";
import styled from "styled-components/native";
import { scale, verticalScale } from "react-native-size-matters";
import colors from "../../../utils/colors";
import { AntDesign } from "@expo/vector-icons";

export const AddButtonWrapper = styled.TouchableOpacity`
  width: ${scale(80)}px;
  height: ${verticalScale(28)}px;
  border-color: ${colors.primary[900]};
  border-width: 0.5px;
  border-radius: ${scale(7)}px;
  background-color: ${colors.primary[50]};
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ItemCounterButton = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: ${scale(7)}px;
  background-color: ${colors.primary[900]};
  width: ${scale(80)}px;
  height: ${verticalScale(28)}px;
`;

export const Text = styled.Text`
  color: ${({ count }) => (count ? colors.white[900] : colors.primary[900])};
  font-weight: bold;
  font-size: ${scale(14)}px;
`;
export const PlusIcon = styled(AntDesign)`
  color: ${colors.primary[900]};
  font-size: ${scale(10)}px;
  position: absolute;
  top: ${scale(5)}px;
  right: ${scale(5)}px;
`;
export const IncrementIcon = styled(AntDesign)`
  color: ${({ count }) => (count ? colors.white[900] : colors.primary[900])};
  font-size: ${scale(14)}px;
`;

export const ScrollToTopWrapper = styled.TouchableOpacity`
  width: ${scale(40)}px;
  height: ${scale(40)}px;
  border-radius: ${scale(40)}px;
  opacity: 0.7;
  background-color: ${({ bgColor }) => bgColor};
  position: absolute;
  bottom: ${scale(40)}px;
  right: ${scale(10)}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  width: ${scale(110)}px;
  height: ${verticalScale(30)}px;
  background-color: ${({ bgColor }) => bgColor || colors.primary[900]};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
