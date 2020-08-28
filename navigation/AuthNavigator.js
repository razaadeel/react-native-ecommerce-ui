import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

import AuthScreen from "../screens/AuthScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import LostPasswordScreen from "../screens/LostPasswordScreen";

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
  Registration: RegistrationScreen,
  LostPassword: LostPasswordScreen,
});

AuthStack.navigationOptions = {
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
  },
};

export default AuthStack;
