import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import Headers from "../../components/header";
import TopicHeader from "../../components/TopicHeader";
import styles from "./styles";
import PhoneInput from "react-native-phone-number-input";
import CustomButton from "../../components/buttons/CustomButton";

const PhoneNumberlogin = () => {

  const phoneInput = useRef(null);
  const [value, setValue] = useState("");
  return (
    <View>
      <Headers
        headerText={'Login to Foodly'}
      />
     <TopicHeader
        h1={'Get started with Foodly'}
        h2={'Enter your phone number to use foodly \nand enjoy your food :)'}
     />
     <View style={styles.textCont}>
       <Text style={styles.textStyle}>PHONE NUMBER</Text>
     </View>
    
     <View style={styles.InputCont}>
     <PhoneInput
        ref={phoneInput}
        initialCountry="us"
        defaultValue={value}
        defaultCode="US"
        layout="first"
        onChangeText={(text) => setValue(text)}
        onChangeFormattedText={(text) => setValue(text)}
        withDarkTheme
        withShadow
        autoFocus
     />
     </View>
     <View style={styles.btnCont}>
     <CustomButton
       text={'SIGN UP'}
       onPress={() => {}}
       bgColor={'#22A45D'}
       fgColor={'#fff'}
     />
     </View>
     
    </View>
  );
};

export default PhoneNumberlogin;
