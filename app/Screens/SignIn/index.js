import { View, Text, StyleSheet,  Pressable } from "react-native";
import React from "react";
import Headers from "../../components/header";
import TopicHeader from "../../components/TopicHeader";
import CustomInput from "../../components/CustomInput";
import styles from "./styles";
import CustomButton from "../../components/buttons/CustomButton";


const SignIn = () => {

  const [email, setEmail] = React.useState("");
  
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
 
     <View style={{marginVertical: 15}}>
     <Pressable>
        <Text style={{color: '#868686', fontSize: 16, textAlign: 'center'}}>
          Forgot Password?
        </Text>
      </Pressable>
     </View>
      

      <CustomButton 
      text="Sign In" 
      onPress={onSignInPressed} 
      bgColor="#22A45D"
      fgColor="#fff"
      />
       
       <View style={{marginVertical: 15}}>
       <Text style={{color: '#868686', fontSize: 20, textAlign: 'center'}}>Or</Text>
       </View>
     

      <CustomButton
        text="Connect with Facebook"
        onPress={onSignInFacebook}
        bgColor="#395998"
        fgColor="#fff"
      />
      
      <CustomButton
        text="Connect with Google"
        onPress={onSignInFacebook}
        bgColor="#4285F4"
        fgColor="#fff"
      />
    </View>
  );
};

export default SignIn;

