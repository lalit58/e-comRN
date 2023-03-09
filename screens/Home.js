import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  { category: "Laptop", _id: 5454646 },
  { category: "Fashion", _id: 54544556 },
  { category: "Footware", _id: 545551646 },
  { category: "Sports", _id: 5454606 },
];

export const products = [
  {
    price: 45999,
    stock: 23,
    name: "Macbook Pro",
    _id: 45852,
    category: "Laptop",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/31YH5wvKCfL._SL500_.jpg",
      },
    ],
  },
  {
    price: 29999,
    stock: 23,
    name: "Hoodie",
    _id: 25850,
    category: "Fashion",
    images: [
      {
        url: "https://assets.ajio.com/medias/sys_master/root/20221128/H9Vp/6384dd60f997ddfdbda3714f/-473Wx593H-441144788-green-MODEL2.jpg",
      },
    ],
  },
  {
    price: 12000,
    stock: 23,
    name: "Shoes",
    _id: 45853,
    category: "Footware",
    images: [
      {
        url: "https://www.jiomart.com/images/product/600x750/rvz8kawjai/dexture-air-jordan-trendy-sneakers-for-men-blue-product-images-rvz8kawjai-0-202212160809.jpg",
      },
    ],
  },
  {
    price: 10000,
    stock: 23,
    name: "Cricket Bat",
    _id: 45855,
    category: "Sports",
    images: [
      {
        url: "https://rukminim1.flixcart.com/image/416/416/l3vxbbk0/kit/b/2/h/dominator-senior-plastic-cricket-bat-with-soft-cricket-ball-na-4-original-imagewskwrppxtpu.jpeg?q=70",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };
  const addToCardHandler = (id) => {
    console.log("Add to Cart", id);
  };
  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />

        {/* Heading row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <Heading text1="Our" text2="Products" />
          {/* Search bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"grey"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "grey",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Products */}

        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
