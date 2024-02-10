import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: responsiveScreenHeight(100),
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("AllNotifications")}
        style={{
          backgroundColor: "#27ac1f",
          width: responsiveScreenWidth(50),
          alignItems: "center",
          borderRadius: 10,
          padding: responsiveScreenWidth(3),
        }}
      >
        <Text style={{ color: "#ffff" }}>Notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
