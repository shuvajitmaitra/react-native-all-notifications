import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const LikedNotification = ({ userName, time, profileImage }) => {
  return (
    <View style={styles.container}>
      {/* Sub Container Start from here */}
      <View style={styles.subContainer}>
        {/* Profile image */}
        <Image style={styles.profileImage} source={profileImage} />

        <View style={styles.textContainer}>
          {/* Profile Message */}
          <View style={styles.messageContainer}>
            <Text style={styles.profileName}>{userName} </Text>

            <Text
              style={{
                color: "rgba(102, 102, 102, 1)",
                fontSize: responsiveFontSize(2),
              }}
            >
              liked your post
            </Text>
          </View>

          {/* Notification coming time */}
          <Text style={{ color: "rgba(102, 102, 102, 1)" }}>{time}</Text>
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
    fontSize: responsiveFontSize(2),
  },
  textContainer: {
    marginLeft: responsiveScreenWidth(4),
    fontSize: responsiveFontSize(5),
  },
  activeDot: {
    backgroundColor: "#27ac1f",
    width: responsiveWidth(2.8),
    height: responsiveWidth(2.8),
    borderRadius: 100,
  },
});
