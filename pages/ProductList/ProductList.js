import React, { useState, useRef, useContext } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { ItemDetailCard, SubtotalCard } from "./../../components/organisms";
import {
  generateFoodData,
  calculateSubtotalAndCount,
} from "./../../utils/helper";
import { Divider } from "./../../styles/global.styles";
import { ScrollToTop } from "./../../components/atoms";
import { store } from "./../../store";
import { ADD_ITEM_TO_CART } from "./../../utils/constants";

const ProductList = ({ navigation }) => {
  const [state, setstate] = useState({
    flatListOffset: 0,
    limit: 10,
    data: generateFoodData(10),
    isLoading: false,
  });
  const product = useContext(store);
  const flatListRef = useRef();
  const offsetThreshold = 1000;

  const fetchResult = () => {
    setstate({ ...state, isLoading: true });
    setTimeout(() => {
      setstate({
        ...state,
        limit: state.limit + 10,
        data: generateFoodData(state.limit + 10),
        isLoading: false,
      });
    }, 1000);
  };
  const addToCart = (item) => {
    product.dispatch({ type: ADD_ITEM_TO_CART, payload: item });
  };

  const handScroll = (event) => {
    if (event.nativeEvent.contentOffset.y > offsetThreshold) {
      setstate({
        ...state,
        flatListOffset: event.nativeEvent.contentOffset.y,
      });
    } else if (event.nativeEvent.contentOffset.y < offsetThreshold) {
      setstate({
        ...state,
        flatListOffset: 0,
      });
    }
  };

  const cartItems = Object.values(product.state.cartItems);
  const { subTotal, itemsCount } = calculateSubtotalAndCount(cartItems);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={state.data}
          onScroll={handScroll}
          ref={flatListRef}
          renderItem={({ item, index }) => (
            <ItemDetailCard
              key={`${index}_${item.id}`}
              {...item}
              handleCounter={(itemCount) => addToCart({ itemCount, ...item })}
              count={product.state.cartItems?.[item.id]?.itemCount}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          onEndReached={fetchResult}
          onEndReachedThreshold={0.8}
          ListFooterComponent={
            state.isLoading ? (
              <ActivityIndicator color="red" size={"large"} />
            ) : null
          }
        />
        {state.flatListOffset >= 1000 && (
          <ScrollToTop
            onPress={() => {
              flatListRef.current.scrollToOffset({ offset: 0 });
            }}
          />
        )}
      </View>
      {cartItems.length > 0 && (
        <SubtotalCard
          onPress={() => navigation.navigate("Cartitems")}
          subTotal={subTotal}
          itemsCount={itemsCount}
          buttonText="Continue "
          cartItems={cartItems}
          handleCounter={addToCart}
          selectedCartVisible={true}
        />
      )}
    </View>
  );
};

export default ProductList;
