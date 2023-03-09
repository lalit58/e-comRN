import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ChangePassword = ({ navigation }) => {
  const [OldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const loading = false;
  const submitHandler = () => {
    alert("Password Change Haba");
  };
  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
      {/* Heading */}
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Change Password</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Old Password"
          secureTextEntry={true}
          value={OldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          {...inputOptions}
          placeholder="New Password"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Button
          loading={loading}
          textColor={colors.color2}
          disabled={newPassword === "" || OldPassword === ""}
          style={styles.btn}
          onPress={submitHandler}
        >
          Change Password
        </Button>
      </View>
    </View>
  );
};

export default ChangePassword;
