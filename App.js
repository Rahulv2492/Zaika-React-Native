import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import CartItems from "./pages/CartItems/CartItems";
import ProductList from "./pages/ProductList/ProductList";
import { StateProvider } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <StateProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Productlist">
            <Stack.Screen
              name="Productlist"
              component={ProductList}
              options={{ title: "Product List" }}
            />
            <Stack.Screen
              name="Cartitems"
              component={CartItems}
              options={{ title: "Cart List" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StateProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
