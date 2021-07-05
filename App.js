import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Imageadd,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Count from "./assets/Components/Count";
import Color from "./assets/Components/Color.js";
import Homescreen from "./assets/Components/Homescreen";
import infoscreen from "./assets/Components/infoscreen";
import notifications from "./assets/Components/notifications";
import blogscreen from "./assets/Components/blogscreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  console.log();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Homescreen}>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="infoscreen" component={drawer} />
        <Stack.Screen name="blogscreen" component={blogscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function drawer() {
  return (
    <Drawer.Navigator initialRouteName={infoscreen}>
      <Drawer.Screen name="infoscreen1" component={infoscreen} />
      <Drawer.Screen name="notifications" component={notifications} />
    </Drawer.Navigator>
  );

  //Adding personalized stylesheets
  const styles = StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: "red",
    },

    pos: {
      backgroundColor: "blue",
      alignItems: "center",
    },
  });
  9;
}
