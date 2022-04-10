import { View, Text } from "react-native";
import React from "react";
import Headers from "../../components/header";
import TopicHeader from "../../components/TopicHeader";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/buttons/CustomButton";

const ForgotScreen = () => {
  return (
    <View>
      <Headers
        headerText={'Forgot Password'}
      />
      <TopicHeader
        h1={'Forgot Password'}
        h2={'Enter your email address and we will \nsend you a reset instructions. '}
      />
     
    <View style={{marginVertical: 30}}>
    <CustomInput
        placeholder={'Email'}
        keyboardType={'default'}
        secureTextEntry={false}
      />
    </View>
    
    <View>
    <CustomButton
        text={'RESET PASSWORD'}
        onPress={() => {
          console.log("Sign in pressed");
        }}
        bgColor={'#22A45D'}
        fgColor={'#fff'}
      />
    </View>
    
    </View>
  );
};

export default ForgotScreen;
