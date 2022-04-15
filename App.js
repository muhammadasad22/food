import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import React from "react";
import SignIn from "./app/Screens/SignIn";
import ForgotScreen from "./app/Screens/ForgotScreen";
import SignUp from "./app/Screens/SignUp";
import PhoneNumberlogin from "./app/Screens/PhoneNumberLogin";
import Onboarding from "./app/Screens/SplashScreen/Onboarding";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="OnboardingScreen"
          component={Onboarding}
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignIn} />
         <Stack.Screen 
          name="SignUp" 
          component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
