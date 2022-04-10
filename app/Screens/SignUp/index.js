import { View, Text } from "react-native";
import React from "react";
import Headers from "../../components/header";
import TopicHeader from "../../components/TopicHeader";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/buttons/CustomButton";
import styles from "./styles";
import { fontSize } from "@mui/system";

const SignUp = () => {
 
  const [name, setname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View>
      <Headers
        headerText={'Sign Up'}
      />
      <TopicHeader
        h1={'Create Account'}
        h2={'Enter your Name, Email and Password\nfor sign up.'}
        LinkText={' Already have account?'}
      />
      <View style={{marginTop: 20}}>
      <CustomInput
        placeholder={'Full Name'}
        keyboardType={'default'}
        secureTextEntry={false}
        onChange={setname}
        value={name}
      />

      <CustomInput
        placeholder={'Email'}
        keyboardType={'default'}
        secureTextEntry={false}
        onChange={setEmail}
        value={email}
      />

      <CustomInput
        placeholder={'Password'}
        keyboardType={'default'}
        secureTextEntry={true}
        onChange={setPassword}
        value={password}
      />
      </View>
     
     <View style={{marginTop: 15}}>
     <CustomButton
       text={'SIGN UP'}
       onPress={() => {}}
       bgColor="#22A45D"
       fgColor={'#fff'}
     />
     </View>
   
    <View>
      <Text style={styles.textStyle}>
      By Signing up you agree to our Terms {'\n'}Conditions & Privacy Policy.
      </Text>
      <Text style={[styles.textStyle, {fontSize: 18, marginBottom: 16}]}>Or</Text>
    </View>
    
     <CustomButton
        text="CONNECT WITH FACEBOOK"
        onPress={() => {}}
        bgColor="#395998"
        fgColor="#fff"
      />
      
      <CustomButton
        text="CONNECT WITH GOOGLE"
        onPress={() => {}}
        bgColor="#4285F4"
        fgColor="#fff"
      />

    </View>
  );
};

export default SignUp;
