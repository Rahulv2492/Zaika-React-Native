import React from "react";
import { View } from "react-native";
import { AddItemButton } from "../../molecules";
import { Text, Price } from "../../atoms";
import colors from "../../../utils/colors";
import { CardWrapper } from "./CartsItemCard.style";

const CartsItemCard = ({ title, price, handleCounter, count, totalPrice }) => {
  return (
    <CardWrapper>
      <View>
        <Text
          size={"sm"}
          weight={"bold"}
          color={colors.gray[800]}
          style={{ marginBottom: 10 }}
        >
          {title}
        </Text>
        <Price value={price} />
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <AddItemButton handleCounter={handleCounter} count={count} />
        <Price value={totalPrice} style={{ marginTop: 5 }} />
      </View>
    </CardWrapper>
  );
};

export default CartsItemCard;
