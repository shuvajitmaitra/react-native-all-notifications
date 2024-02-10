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
      {/* Sub Container Start from here */}
      <View style={styles.subContainer}>
        {/* Profile image */}
        <Image
          style={styles.profileImage}
          source={require("../../assets/man1.png")}
        />

        <View style={styles.textContainer}>
          {/* Profile Message */}
          <View style={styles.messageContainer}>
            <Text style={styles.profileName}>SA </Text>

            <Text style={{ color: "rgba(102, 102, 102, 1)" }}>
              liked your post
            </Text>
          </View>

          {/* Notification coming time */}
          <Text style={{ color: "rgba(102, 102, 102, 1)" }}>4 hour ago</Text>
        </View>
      </View>

      {/* User active sign Dot */}
      <View style={styles.activeDot}></View>
    </View>
  );
};

export default LikedNotification;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    height: responsiveHeight(8),
    width: responsiveWidth(15),
    resizeMode: "contain",
    borderRadius: 200,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveScreenHeight(1),
  },
  profileName: {
    fontWeight: "bold",
  },
  textContainer: {
    marginLeft: responsiveScreenWidth(4),
  },
  activeDot: {
    backgroundColor: "#27ac1f",
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 100,
  },
});
