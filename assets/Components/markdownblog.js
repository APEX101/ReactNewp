import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Markdown from "react-native-markdown-display";

const copy = `# h1 Heading 8-)
 
**This is some bold text!**
 
This is normal text



`;

const markdownblog = () => {
  return (
    <View>
      <Text>HEllo</Text>
      <Markdown>{copy}</Markdown>
    </View>
  );
};

export default markdownblog;
