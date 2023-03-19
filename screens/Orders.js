import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";

export const orders = [
  {
    _id: "123456",
    shippingInfo: {
      address: "front Home Hrizon",
      city: "Bhubaneswar",
      country: "India",
      pinCode: 785236,
    },
    createdAt: "12-02-2022T1245",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmout: 20000,
  },
  {
    _id: "123457",
    shippingInfo: {
      address: "front Home Hrizon",
      city: "Bhubaneswar",
      country: "India",
      pinCode: 785236,
    },
    createdAt: "12-02-2022T1245",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmout: 29000,
  },
  {
    _id: "123458",
    shippingInfo: {
      address: "front Home Hrizon",
      city: "Bhubaneswar",
      country: "India",
      pinCode: 785236,
    },
    createdAt: "12-02-2022T1245",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmout: 20000,
  },
  {
    _id: "123459",
    shippingInfo: {
      address: "front Home Hrizon",
      city: "Bhubaneswar",
      country: "India",
      pinCode: 785236,
    },
    createdAt: "12-02-2022T1245",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmout: 29000,
  },
];

const Orders = () => {
  const loading = false;
  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsHorizontalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmout}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
