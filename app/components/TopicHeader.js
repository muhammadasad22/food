import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TopicHeader = ({h1, h2, LinkText}) => {
  return (
    <View>
    <View style={styles.container}>
     <Text style={styles.textStyle}>{h1}</Text>
     <Text style={styles.BodyText}>
     {h2}
     <Text style={styles.LinkText}>{LinkText}</Text>
     </Text>
    </View>

    </View>
  );
};

export default TopicHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
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