import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Headers from "../../components/header";
import TopicHeader from "../../components/TopicHeader";
import CustomInput from "../../components/CustomInput";
import styles from "./styles";
import CustomButton from "../../components/buttons/CustomButton";

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
      <CustomButton/>
    </View>
  );
};

export default SignIn;

