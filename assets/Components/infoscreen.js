import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  AlertButton,
  AlertText,
  onPress,
  ImageBackground,
} from "react-native";
import { Value } from "react-native-reanimated";
import HomeScreen from "./Homescreen";

const infoscreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        padding: 100,
        justifyContent: "space-between",
        backgroundColor: "red",
      }}
    >
      <Button
        style={{ alignItems: "center" }}
        title={"Open App drawer"}
        onPress={() => navigation.openDrawer()}
      />
      <Text>Enter Name here:</Text>
      <TextInput
        placeholder="Enter Text in TextInput"
        underlineColorAndroid="transparent"
        style={styles.textinput}
        value={name}
        onChangeText={(myname) => setName(myname)}
      />
      <Text>Enter Age here:</Text>
      <TextInput
        placeholder="Enter Text in TextInput"
        underlineColorAndroid="transparent"
        style={styles.textinput}
        value={age}
        onChangeText={(myage) => setAge(myage)}
      />
      <Text>Enter Username here:</Text>
      <TextInput
        placeholder="Enter Text in TextInput"
        underlineColorAndroid="transparent"
        style={styles.textinput}
        value={username}
        onChangeText={(myusername) => setUsername(myusername)}
      />
      <Text style={styles.font}>
        You will be Registered as Name: {name} Age: {age} and Username:{" "}
        {username}
      </Text>
      <Button
        value={name}
        color="darkblue"
        title={"Proceed Next "}
        onPress={() => navigation.navigate("blogscreen")}
      />
    </View>
  );
};

export default infoscreen;

const styles = StyleSheet.create({
  info: {
    height: 100,
    width: 100,
    flex: 1,
    backgroundColor: "white",
    textAlign: "center",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350,
  },

  textinput: {
    textAlign: "center",

    height: 50,

    borderWidth: 2,

    borderColor: "#FF1256",

    borderRadius: 20,

    width: 200,

    backgroundColor: "#FFFF12",
  },

  button: {
    height: 50,

    borderWidth: 2,

    borderColor: "#FF1256",
    backgroundColor: "#FFFF12",
  },

  font: {
    color: "blue",
    fontSize: 20,
    fontStyle: "Arial",
    fontFamily: "sans-serif",
    textTransform: "uppercase",
    ontWeight: "bold",
    textShadowColor: "#D5F",
    textShadowRadius: 4,

    textShadowOffset: { width: 2, height: 2 },
  },
});
