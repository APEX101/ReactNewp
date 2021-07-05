import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import React, { Component } from "react";

import Markdown from "react-native-markdown-display";
import readme from "./readme.md";

class notifications extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: null };
  }

  componentWillMount() {
    fetch(readme)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
  }

  render() {
    return (
      <View className="content">
        <Markdown children={this.state.terms} />
      </View>
    );
  }
}

export default notifications;
