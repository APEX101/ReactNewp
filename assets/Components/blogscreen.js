import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import React, { Component, useState, useEffect } from "react";

import Markdown from "react-native-markdown-display";
import readme from "./readme.md";

const blogscreen = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    import("./readme.md").then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((res) => setPost(res));
    });
  });

  return (
    <View>
      <Markdown>{post}</Markdown>
    </View>
  );
};

export default blogscreen;

const styles = StyleSheet.create({});
