import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Color = ({ func }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Button title={"Checking my Call back button"} onPress={() => func()} />
    </View>
  );
};

export default Color;

const styles = StyleSheet.create({
  size: {
    height: 10,
    width: 20,
    alignItems: "center",
  },
});
