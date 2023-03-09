import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "MacBook",
    image: "https://m.media-amazon.com/images/I/31YH5wvKCfL._SL500_.jpg",
    product: "123345",
    stock: 3,
    price: 49999,
    quantity: 2,
  },
  {
    name: "Shoes",
    image:
      "https://www.jiomart.com/images/product/600x750/rvz8kawjai/dexture-air-jordan-trendy-sneakers-for-men-blue-product-images-rvz8kawjai-0-202212160809.jpg",
    product: "123346",
    stock: 5,
    price: 10999,
    quantity: 5,
  },
  {
    name: "MacBook",
    image: "https://m.media-amazon.com/images/I/31YH5wvKCfL._SL500_.jpg",
    product: "123347",
    stock: 3,
    price: 49999,
    quantity: 2,
  },
  {
    name: "Shoes",
    image:
      "https://www.jiomart.com/images/product/600x750/rvz8kawjai/dexture-air-jordan-trendy-sneakers-for-men-blue-product-images-rvz8kawjai-0-202212160809.jpg",
    product: "123348",
    stock: 5,
    price: 10999,
    quantity: 5,
  },
  {
    name: "Shoes",
    image:
      "https://www.jiomart.com/images/product/600x750/rvz8kawjai/dexture-air-jordan-trendy-sneakers-for-men-blue-product-images-rvz8kawjai-0-202212160809.jpg",
    product: "123349",
    stock: 5,
    price: 10999,
    quantity: 5,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = (id, qty, stock) => {
    console.log("Increasing", id, qty, stock);
  };
  const decrementHandler = (id, qty) => {
    console.log("decreasing", id, qty);
  };

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} />

      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
              navigate={navigate}
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>₹5</Text>
      </View>
      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
