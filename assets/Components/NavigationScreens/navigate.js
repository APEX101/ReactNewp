import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "../Homescreen";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Stack = createStackNavigator();

const navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigate;

const styles = StyleSheet.create({});
