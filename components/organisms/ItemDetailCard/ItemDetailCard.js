import React from "react";
import { View } from "react-native";
import {
  AddItemButton,
  PriceWithDiscount,
  RateWithVoting,
} from "./../../molecules";
import { Text } from "./../../atoms";
import colors from "./../../../utils/colors";
import { CardWrapper } from "./ItemDetailCard.style";

const ItemDetailCard = ({
  title,
  rating,
  price,
  votes,
  randumNumber,
  handleCounter,
  count,
}) => {
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
        <RateWithVoting
          ratingCount={rating}
          votes={votes}
          style={{ marginBottom: 10 }}
        />
        <PriceWithDiscount value={price} randomValue={randumNumber} />
      </View>
      <AddItemButton handleCounter={handleCounter} count={count} />
    </CardWrapper>
  );
};

export default ItemDetailCard;
