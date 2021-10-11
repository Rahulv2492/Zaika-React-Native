import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, Dimensions } from "react-native";
import { SubTotalCardWrapper, DropDownButton } from "./SubtotalCard.style";
import { Text, Price, Button } from "./../../atoms";
import { RowCenterView } from "./../../../styles/global.styles";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import AllCartItems from "./AllCartItems";

const SubtotalCard = ({
  subTotal,
  itemsCount,
  onPress,
  buttonText,
  cartItems,
  handleCounter,
  selectedCartVisible,
}) => {
  const arrowRotate = useSharedValue("0deg");
  const offset = useSharedValue(Dimensions.get("screen").height);

  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(arrowRotate.value, {
            duration: 400,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });
  return (
    <View>
      {selectedCartVisible && (
        <AllCartItems
          handleCounter={handleCounter}
          cartItems={cartItems}
          offset={offset}
        />
      )}
      <SubTotalCardWrapper>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {selectedCartVisible && (
            <DropDownButton
              onPress={() => {
                offset.value =
                  offset.value > 0 ? 0 : Dimensions.get("screen").height;
                arrowRotate.value =
                  arrowRotate.value === "0deg" ? "-180deg" : "0deg";
              }}
            >
              <Animated.View style={[arrowStyle]}>
                <MaterialIcons
                  name={"keyboard-arrow-down"}
                  size={30}
                  color={"gray"}
                />
              </Animated.View>
            </DropDownButton>
          )}
          <View>
            <Text>{`${itemsCount} Items`}</Text>
            <Text>
              Subtotal: <Price value={subTotal} />
            </Text>
          </View>
        </View>

        <RowCenterView>
          <Button onPress={onPress} value={buttonText} />
        </RowCenterView>
      </SubTotalCardWrapper>
    </View>
  );
};

SubtotalCard.defaultProps = {
  selectedCartVisible: false,
  onPress: () => {},
};

SubtotalCard.propTypes = {
  selectedCartVisible: PropTypes.bool,
  subTotal: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  cartItems: PropTypes.array,
  handleCounter: PropTypes.func,
};

export default SubtotalCard;
