import React, { useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import { store } from "./../../store";
import { CartItemsCard, SubtotalCard } from "./../../components/organisms";
import { ADD_ITEM_TO_CART } from "./../../utils/constants";
import { calculateSubtotalAndCount } from "./../../utils/helper";

const CartItems = () => {
  const { state, dispatch } = useContext(store);
  const addToCart = (item) => {
    dispatch({ type: ADD_ITEM_TO_CART, payload: item });
  };
  const cartItems = Object.values(state.cartItems);
  const { subTotal, itemsCount } = calculateSubtotalAndCount(cartItems);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {Object.values(state.cartItems).map((item, index) => {
          const priceWihDiscount = item.price - item.randumNumber;
          return (
            <CartItemsCard
              key={`${index}_${item.title}`}
              {...item}
              count={item.itemCount}
              price={priceWihDiscount}
              totalPrice={priceWihDiscount * item.itemCount}
              handleCounter={(itemCount) => addToCart({ ...item, itemCount })}
            />
          );
        })}
      </ScrollView>
      <View
        style={{
          marginTop: "auto",
        }}
      >
        <SubtotalCard
          onPress={() => {}}
          subTotal={subTotal}
          itemsCount={itemsCount}
          buttonText={"Place Order"}
        />
      </View>
    </View>
  );
};

export default CartItems;
