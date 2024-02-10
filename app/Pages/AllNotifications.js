import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LikedNotification from "../Components/LikedNotification";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import RequestNotification from "../Components/RequestNotification";
import InactiveLikedNotification from "../Components/InactiveLikedNotification";

const AllNotifications = () => {
  return (
    <View style={styles.container}>
      <LikedNotification />
      <RequestNotification />
      <InactiveLikedNotification />
    </View>
  );
};

export default AllNotifications;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveScreenWidth(5),
    backgroundColor: "rgba(0, 0, 0, 0.01)",
  },
});
