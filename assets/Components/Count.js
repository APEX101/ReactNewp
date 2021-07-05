import React from "react";
import { View, Text } from "react-native";

const Count = ({ name, age, game }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>
        Hello this is {name}
        age is {age}
        game is {game}
      </Text>
    </View>
  );
};

export default Count;
//props
