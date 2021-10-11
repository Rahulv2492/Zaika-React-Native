import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, IncrementIcon, ItemCounterButton } from "./Button.style";

export default function CounterButton({ count, setCount }) {
  return (
    <ItemCounterButton>
      <TouchableOpacity onPress={() => setCount(count - 1)}>
        <IncrementIcon name="minus" count={count} />
      </TouchableOpacity>
      <Text count={count}>{count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <IncrementIcon name="plus" count={count} />
      </TouchableOpacity>
    </ItemCounterButton>
  );
}
