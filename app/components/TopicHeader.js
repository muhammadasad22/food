import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TopicHeader = () => {
  return (
    <View>
    <View style={styles.container}>
     <Text style={styles.textStyle}>Welcome to</Text>
     <Text style={styles.BodyText}>
     Enter your Phone number or Email{'\n'}for sign in, Or
     <Text style={styles.LinkText}> Create new account.</Text>
     </Text>
    </View>

    </View>
  );
};

export default TopicHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
  },
  textStyle: {
    fontSize: 33,
    color: '#000',
    fontWeight: 'bold',
  },
  BodyText: {
    fontSize: 15,
    color: '#868686',
  },
  LinkText: {
    color: '#22A45D'
  },
})