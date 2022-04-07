import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import BackArrowIcon from './../assests/Icons/BackArrowIcon';

const Headers = ({headerText}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <BackArrowIcon/>
      </Pressable> 
      <View style={styles.textCont}> 
      <Text style={styles.headerText}>{headerText}</Text>
      </View>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
  },
  textCont: {
    marginLeft: 120,
  },
  headerText: {
      fontSize: 20,
      color: '#000',
      textAlign: 'center',
      fontWeight: 'bold',
  }
});
