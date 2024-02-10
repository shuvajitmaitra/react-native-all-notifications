import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LikedNotification from "../Components/LikedNotification";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import RequestNotification from "../Components/RequestNotification";
import InactiveLikedNotification from "../Components/InactiveLikedNotification";
import ReceivedNotification from "../Components/ReceivedNotification";

const AllNotifications = () => {
  const man1 = require("../../assets/man1.png");
  const man2 = require("../../assets/man2.png");
  return (
    <ScrollView style={styles.container}>
      <LikedNotification userName="SA" profileImage={man1} time="4 hour ago" />
      <RequestNotification
        userName="AR"
        profileImage={man1}
        time="4 hour ago"
      />
      <InactiveLikedNotification
        userName="SA"
        profileImage={man2}
        time="2 November 2023  12:30 PM"
      />
      <LikedNotification userName="SA" profileImage={man1} time="4 hour ago" />
      <ReceivedNotification
        userName="MS"
        profileImage={man1}
        time="2 November 2023  12:30 PM"
      />
      <RequestNotification
        userName="AR"
        profileImage={man1}
        time="4 hour ago"
      />
      <LikedNotification userName="SA" profileImage={man1} time="4 hour ago" />
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
