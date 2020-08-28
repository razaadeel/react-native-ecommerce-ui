import React from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

import TabBarIcon from "../components/TabBarIcon";
import DeliveryScreen from "../screens/DeliveryScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import CartScreen from "../screens/CartScreen";
import ProductScreen from "../screens/ProductScreen";
import ChildCategoriesScreen from "../screens/ChildCategoriesScreen";
import ParentCategoriesScreen from "../screens/ParentCategoriesScreen";
import DiscountProductsScreen from "../screens/DiscountProductsScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthScreen from "../screens/AuthScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import LostPasswordScreen from "../screens/LostPasswordScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ReviewsScreen from "../screens/ReviewsScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProductInformationScreen from "../screens/ProductInformationScreen";
import OrderScreen from "../screens/OrderScreen";
import ThankForOrderScreen from "../screens/ThankForOrderScreen";
import SavedSuccessfulScreen from "../screens/SavedSuccessfulScreen";
import AccountCreatedSuccessScreen from "../screens/AccountCreatedSuccessScreen";
import WriteReviewScreen from "../screens/WriteReviewScreen";
import DeliveryAddressScreen from "../screens/DeliveryAddressScreen";
import SuccessReviewScreen from "../screens/SuccessReviewScreen";
import IconWithBadge from "../components/IconWithBadge";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ParentCategories: ParentCategoriesScreen,
  DiscountProducts: DiscountProductsScreen,
  ChildCategories: ChildCategoriesScreen,
  Product: ProductScreen,
  ProductInformation: ProductInformationScreen,
  Reviews: ReviewsScreen,
  WriteReview: WriteReviewScreen,
  SuccessReview: SuccessReviewScreen,
});

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: ({ navigation }) => {
    const { routeName } = navigation.state;
    if (routeName === "SuccessReviewScreen") {
      return false;
    }
    if (routeName === "WriteReview") {
      return false;
    }
  },
  tabBarOnPress: ({ navigation, defaultHandler }) => {
    navigation.navigate("Home");
    defaultHandler();
  },
  tabBarLabel: "Home",
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      tintColor="#000"
      name={Platform.OS === "ios" ? `ios-home${focused ? "" : ""}` : "md-home"}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#F05829",
    inactiveTintColor: "#000",
    labelStyle: {
      fontFamily: "work-sans-semibold",
      fontSize: 10,
    },
    style: {
      height: 60,
      paddingVertical: 7,
      borderTopWidth: 0.5,
      borderTopColor: "#bbb",
    },
  },
});

const CartStack = createStackNavigator({
  Cart: CartScreen,
  Checkout: CheckoutScreen,
  Delivery: DeliveryScreen,
  ThankForOrder: ThankForOrderScreen,
});

CartStack.navigationOptions = ({ navigation }) => ({
  tabBarOnPress: ({ navigation, defaultHandler }) => {
    navigation.navigate("Cart");
    defaultHandler();
  },
  tabBarVisible: !(navigation.state.index > 0),
  tabBarLabel: "Cart",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-cart" : "md-cart"} />
  ),
  tabBarOptions: {
    activeTintColor: "#F05829",
    inactiveTintColor: "#000",
    labelStyle: {
      fontFamily: "work-sans-semibold",
      fontSize: 10,
    },
    style: {
      height: 60,
      paddingVertical: 7,
      borderTopWidth: 0.5,
      borderTopColor: "#bbbbbb",
    },
  },
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Orders: OrdersScreen,
  Auth: AuthScreen,
  Order: OrderScreen,
  SavedSuccessful: SavedSuccessfulScreen,
});

ProfileStack.navigationOptions = ({ navigation }) => ({
  tabBarOnPress: ({ navigation, defaultHandler }) => {
    navigation.navigate("Profile");
    defaultHandler();
  },
  tabBarVisible: !(navigation.state.index > 0),
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-contact" : "md-contact"} />
  ),
  tabBarOptions: {
    activeTintColor: "#F05829",
    inactiveTintColor: "#000",
    labelStyle: {
      fontFamily: "work-sans-semibold",
      fontSize: 10,
    },
    style: {
      height: 60,
      paddingVertical: 7,
      borderTopWidth: 0.5,
      borderTopColor: "#bbb",
    },
  },
});

export default createBottomTabNavigator({
  Home: HomeStack,
  Cart: CartStack,
  Profile: ProfileStack,
});

// export default createBottomTabNavigator(
//     {
//         Home: HomeScreen,
//         Cart: CartScreen,
//         Profile: ProfileScreen,
//
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, horizontal, tintColor }) => {
//                 const { routeName } = navigation.state;
//                 let IconComponent = Ionicons;
//                 let iconName;
//                 if (routeName === 'Home') {
//                     return <IconComponent name={'ios-home'} size={25} color={tintColor} />
//                 } else if (routeName === 'Profile') {
//                     return <IconComponent name={'ios-contact'} size={25} color={tintColor} />
//                 } else if (routeName === 'Cart') {
//                     const other_param = navigation.getParam('name', '0');
//                     return <IconWithBadge name={'ios-cart'} size={25} color={tintColor} badgeCount={other_param}/>
//                     // Sometimes we want to add badges to some icons.
//                     // You can check the implementation below.
//                 }
//             },
//         }),
//         tabBarOptions: {
//             activeTintColor: "#F05829",
//             inactiveTintColor: "#000",
//             labelStyle: {
//                 fontFamily: "work-sans-semibold",
//                 fontSize: 10,
//             },
//             style: {
//                 height: 60,
//                 paddingVertical: 7,
//                 borderTopWidth: 0.5,
//                 borderTopColor: "#bbb"
//             }
//         }
//     }
// );
