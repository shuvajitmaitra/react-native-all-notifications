import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LikedNotification from "../Components/LikedNotification";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";

const AllNotifications = () => {
  return (
    <View style={styles.container}>
      <LikedNotification />
    </View>
  );
};

export default AllNotifications;

const styles = StyleSheet.create({
  container: {
    padding: responsiveScreenWidth(5),
    backgroundColor: "rgba(0, 0, 0, 0.01)",
  },
});
