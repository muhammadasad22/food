import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomButton = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.BtnText}>SIGN IN</Text>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  cont: {
    height: 50,
    width: "90%",
    borderRadius: 10,
    backgroundColor: '#22A45D',
    marginLeft: 15,
  },
  BtnText: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
