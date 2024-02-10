import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const LikedNotification = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../../assets/man1.png")}
      />
      <Text style={styles.textContainer}>
        <Text style={styles.profileName}>SA</Text>{" "}
        <Text style={{ color: "rgba(102, 102, 102, 1)" }}>liked your post</Text>
      </Text>
    </View>
  );
};

export default LikedNotification;
const styles = StyleSheet.create({
  container: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    flexDirection: "row",
  },
  profileImage: {
    height: responsiveHeight(8),
    width: responsiveWidth(15),
    resizeMode: "contain",
    borderRadius: 200,
  },
  profileName: {
    fontWeight: "bold",
  },
  textContainer: {
    marginLeft: 20,
  },
});
