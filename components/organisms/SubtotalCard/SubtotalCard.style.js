import React from "react";
import styled from "styled-components/native";
import { colors, typography } from "../../../utils";
import { scale, verticalScale } from "react-native-size-matters";
import Animated from "react-native-reanimated";
import { Dimensions } from "react-native";

export const SubTotalCardWrapper = styled.View`
  width: 100%;
  border-top-color: ${colors.gray[700]};
  border-top-width: ${scale(0.3)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: ${verticalScale(20)}px;
  padding-horizontal: ${scale(10)}px;
  background-color: ${colors.white[900]};
`;

export const CartItemWrapper = styled(Animated.View)`
  height: ${Dimensions.get("window").height}px;
  width: 100%;
  position: absolute;
  bottom: 86px;
  justify-content: flex-end;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
  width: 100%;
`;
export const CartItemCardWrapper = styled.View`
  height: ${verticalScale(400)}px;
  background-color: ${colors.white[900]};
  border-top-left-radius: ${scale(10)}px;
  border-top-right-radius: ${scale(10)}px;
`;

export const DeliveryInfoWrapper = styled.View`
  width: 100%;
  padding: ${scale(10)}px;
  justify-content: center;
  align-items: center;
`;

export const DeliveryInfoText = styled.Text`
  color: ${colors.green[900]};
  font-size: ${typography.fontSizes.md}px;
`;

export const DropDownButton = styled.TouchableOpacity`
  height: ${verticalScale(25)}px;
  margin-right: ${scale(5)}px;
  border-radius: ${scale(5)}px;
  border-width: 0.5px;
  border-color: ${colors.gray[900]};
  align-items: center;
  justify-content: center;
`;
