import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LikedNotification from "../Components/LikedNotification";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import RequestNotification from "../Components/RequestNotification";
import InactiveLikedNotification from "../Components/InactiveLikedNotification";
import ReceivedNotification from "../Components/ReceivedNotification";

const AllNotifications = () => {
  return (
    <ScrollView style={styles.container}>
      <LikedNotification />
      <RequestNotification />
      <InactiveLikedNotification />
      <LikedNotification />
      <ReceivedNotification />
      <RequestNotification />
      <LikedNotification />
    </ScrollView>
  );
};

export default AllNotifications;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveScreenWidth(5),
    backgroundColor: "rgba(0, 0, 0, 0.01)",
  },
});
