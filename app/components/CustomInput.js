import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const CustomInput = ({onChange, text, placeholder, keyboardType, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
       style={styles.input}
       onChangeText={onChange}
       value={text}
       placeholder={placeholder}
       keyboardType={keyboardType}
       secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    
  },
  container: {
    height: 50,
    width: "90%",
    borderRadius: 4,
    marginLeft: 15,
    backgroundColor: '#F3F2F2'
  }
});
