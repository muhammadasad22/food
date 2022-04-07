import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Headers from "../../components/header";
import TopicHeader from "../../components/TopicHeader";
import CustomInput from "../../components/CustomInput";

const SignIn = () => {

  const [email, setEmail] = React.useState("");

  return (
    <View>
      <Headers
        headerText={'Sign In'}
      />
      <TopicHeader/>
      <View style={styles.cont}>
      <CustomInput
        placeholder={'Phone number or Email'}
        keyboardType={'default'}
        secureTextEntry={false}
        onChange={setEmail}
        value={email}
      />
      </View>
      <View style={styles.cont1}>
      <CustomInput
        placeholder={'Password'}
        keyboardType={'default'}
        secureTextEntry={true}
        onChange={setEmail}
        value={email}
      />
      </View>
     
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
   cont: {
     marginTop: 35,
   },
   cont1: {
     marginTop: 10
   }
});