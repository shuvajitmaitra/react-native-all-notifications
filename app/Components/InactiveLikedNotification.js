import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const InactiveLikedNotification = () => {
  return (
    <View style={styles.container}>
      {/* Sub Container Start from here */}
      <View style={styles.subContainer}>
        {/* Profile image */}
        <Image
          style={styles.profileImage}
          source={require("../../assets/man2.png")}
        />

        <View style={styles.textContainer}>
          {/* Profile Message */}
          <View style={styles.messageContainer}>
            <Text style={styles.profileName}>SA </Text>

            <Text style={{ color: "rgba(102, 102, 102, 1)", fontSize: 20 }}>
              liked your post
            </Text>
          </View>

          {/* Notification coming time */}
          <Text style={{ color: "rgba(102, 102, 102, 1)" }}>4 hour ago</Text>
        </View>
      </View>
    </View>
  );
};

export default InactiveLikedNotification;
const styles = StyleSheet.create({
  container: {
    paddingTop: responsiveHeight(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(102, 102, 102, 0.5)",
    paddingBottom: responsiveScreenHeight(1.5),
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    height: responsiveHeight(8),
    width: responsiveWidth(15),
    resizeMode: "cover",
    borderRadius: 200,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveScreenHeight(1),
  },
  profileName: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(2),
  },
  textContainer: {
    marginLeft: responsiveScreenWidth(4),
  },
});
