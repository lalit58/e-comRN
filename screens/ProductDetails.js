import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { defaultStyle, colors } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";

import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};
const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);

  const name = "Mackbook Pro";
  const price = 34985;
  const stock = 10;
  const description =
    "The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera, and studio‑quality mics, it’s our most portable pro laptop, The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera, and studio‑quality mics, it’s our most portable pro laptop";

  const isCarousel = useRef(null);

  const [quantity, setQuantity] = useState(1);

  const images = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Gorgosaurus_BW_transparent.png",
    },
    { url: "https://picsum.photos/seed/picsum/200/300" },
  ];

  const incrementQty = () => {
    if (stock <= quantity) return;
    setQuantity((prev) => prev + 1);
  };
  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
  };

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,
      }}
    >
      <Header back={true} />
      {/* carousel */}
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={""}
        renderItem={CarouselCardItem}
      />
      {/* <Image
        source={
          {
            // uri: "https://m.media-amazon.com/images/I/31YH5wvKCfL._SL500_.jpg",
          }
        }
        style={{
          width: "100%",
          height: 200,
          resizeMode: "contain",
          // position: "absolute",
          justifyContent: "center",
          top: 80,
        }}
      /> */}
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 15,
          flex: 1,
          marginTop: 100,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <View style={{ margin: 10 }}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 25,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "900",
            }}
          >
            ₹{price}
          </Text>
          <Text
            style={{
              letterSpacing: 1,
              lineHeight: 20,
              marginVertical: 15,
            }}
            numberOfLines={8}
          >
            {description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <Text
              style={{
                color: colors.color3,
                fontWeight: "100",
              }}
            >
              Quantity
            </Text>
            <View
              style={{
                width: 80,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={decrementQty}>
                <Avatar.Icon icon={"minus"} {...iconOptions} />
              </TouchableOpacity>
              <Text style={style.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQty}>
                <Avatar.Icon icon={"plus"} {...iconOptions} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.9} onPress={addToCartHandler}>
            <Button icon={"cart"} style={style.btn} textColor={colors.color2}>
              Add To Cart
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: {
      width: ITEM_WIDTH,
      resizeMode: "contain",
      height: 250,
    },
  },
  quantity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});
export default ProductDetails;
