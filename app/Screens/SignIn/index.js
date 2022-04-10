import { View, Text, StyleSheet,  Pressable } from "react-native";
import React from "react";
import Headers from "../../components/header";
import TopicHeader from "../../components/TopicHeader";
import CustomInput from "../../components/CustomInput";
import styles from "./styles";
import CustomButton from "../../components/buttons/CustomButton";


const SignIn = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const onSignInPressed = () => {
    console.log("Sign in pressed");
  };

  const onSignInFacebook = () => {
    console.log("Sign in Facebook");
  };

  return (
    <View>
      <Headers
        headerText={'Sign In'}
      />
      <TopicHeader
        h1={'Welcome to'}
        h2={'Enter your Phone number or Email \nfor sign in, Or '}
        LinkText={'Create new account'}
      />
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
        onChange={setPassword}
        value={password}
      />
      </View>
 
     <View style={{marginVertical: 15}}>
     <Pressable>
        <Text style={{color: '#868686', fontSize: 16, textAlign: 'center', fontWeight: '700'}}>
          Forgot Password?
        </Text>
      </Pressable>
     </View>
      

      <CustomButton 
      text="SIGN IN" 
      onPress={onSignInPressed} 
      bgColor="#22A45D"
      fgColor="#fff"
      />
       
       <View style={{marginVertical: 15}}>
       <Text style={{color: '#868686', fontSize: 20, textAlign: 'center'}}>Or</Text>
       </View>
     

      <CustomButton
        text="CONNECT WITH FACEBOOK"
        onPress={onSignInFacebook}
        bgColor="#395998"
        fgColor="#fff"
      />
      
      <CustomButton
        text="CONNECT WITH GOOGLE"
        onPress={onSignInFacebook}
        bgColor="#4285F4"
        fgColor="#fff"
      />
    </View>
  );
};

export default SignIn;

