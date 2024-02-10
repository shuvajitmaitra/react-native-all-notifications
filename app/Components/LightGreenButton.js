import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const LightGreenButton = ({ lightGreen }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LightGreenButton;

const styles = StyleSheet.create({
  mainContainer: {
    // width: responsiveScreenWidth(100),
  },
  button: {
    width: responsiveScreenWidth(20),
    backgroundColor: "rgba(39, 172, 31, 0.1)",
    borderRadius: responsiveWidth(1),
  },
  buttonText: {
    textAlign: "center",
    marginVertical: responsiveHeight(1),
    color: "rgba(39, 172, 31, 1)",
  },
});
