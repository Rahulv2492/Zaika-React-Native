import React from "react";
import { ScrollView } from "react-native";
import {
  CartItemWrapper,
  Overlay,
  CartItemCardWrapper,
  DeliveryInfoWrapper,
  DeliveryInfoText,
} from "./SubtotalCard.style";
import { withTiming, useAnimatedStyle, Easing } from "react-native-reanimated";
import CartItemsCard from "./../CartItemsCard";
import PropTypes from "prop-types";

const AllCartItems = ({ handleCounter, cartItems, offset }) => {
  const sliderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(offset.value, {
            duration: 400,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });
  return (
    <CartItemWrapper style={[sliderStyle]}>
      <Overlay />
      <CartItemCardWrapper>
        <DeliveryInfoWrapper>
          <DeliveryInfoText>Delivery in 30 minutes</DeliveryInfoText>
        </DeliveryInfoWrapper>
        <ScrollView>
          {cartItems.map((item, index) => {
            const priceWihDiscount = item.price - item.randumNumber;

            return (
              <CartItemsCard
                key={`${index}_${item.title}`}
                {...item}
                count={item.itemCount}
                price={priceWihDiscount}
                totalPrice={priceWihDiscount * item.itemCount}
                handleCounter={(itemCount) =>
                  handleCounter({ ...item, itemCount })
                }
              />
            );
          })}
        </ScrollView>
      </CartItemCardWrapper>
    </CartItemWrapper>
  );
};

AllCartItems.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleCounter: PropTypes.func.isRequired,
};

export default AllCartItems;
