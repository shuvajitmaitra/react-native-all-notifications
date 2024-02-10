import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const GreenButton = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GreenButton;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: responsiveScreenHeight(1),
  },
  button: {
    width: responsiveScreenWidth(20),
    backgroundColor: "rgba(39, 172, 31,1)",
    borderRadius: responsiveWidth(1),
  },
  buttonText: {
    textAlign: "center",
    marginVertical: responsiveHeight(1),
    color: "#ffff",
  },
});
