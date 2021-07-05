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
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Count from "./Count";
import Color from "./Color";
import infoscreen from "./infoscreen";

const HomeScreen = ({ navigation }) => {
  console.log();
  const [color, setColor] = useState(0);
  return (
    <View style={styles.container}>
      <Button
        title="Go to info screen profile"
        onPress={() => navigation.navigate("infoscreen")}
      />

      <Count name="Ahmad" age="11" game="sup" />
      <Color func={() => setColor(color + 1)} />
      <Text>CountNumber by using stateupdate {color}</Text>
      <FlatL />
      <Text>this is the return by Flatlist</Text>
      <Text style={{ textAlign: "center" }}>Adding Image</Text>
      <Image
        source={{
          uri: "https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2020/06/spiderman-logo-2020-1568x882-1024x576.jpg",
        }}
        style={{ height: 200, width: 200, paddingLeft: 1600 }}
      />

      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
};

//Trying FlatList
const FlatL = () => {
  return (
    <View style={styles.pos}>
      <TextInput autoComplete="off" autoCorrect={false} />

      <FlatList
        data={[{ name: "Ahmad" }, { agae: "Hassaan" }, { game: "HelloWorld" }]}
        renderItem={({ item }) => (
          <Text style={styles.container}>
            Return{item.game} {item.age}
            {item.name}
          </Text>
        )}
      />
    </View>
  );
};

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

export default HomeScreen;
