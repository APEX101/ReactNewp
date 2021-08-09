import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, Component } from "react";

// As a funciton

// const myScreen = () => {
//   const [first, setFirst] = useState("Hello");
//   function pressHandle() {
//     setFirst("Bye");
//   }
//   return (
//     <View>
//       <Text>Trying my Event handler as function</Text>
//       {/* displaying state variable first */}
//       {/* always print first variable not setting variable */}
//       <Text> {first} </Text>
//       {/* Using Event Handler to call and change setState variable Here binding concepts are done also */}
//       <Button onPress={() => pressHandle()} />
//     </View>
//   );
// };

// export default myScreen;

// As a class
export class myScreen extends Component {
  constructor() {
    super();
    // Defing state as first
    this.state = {
      first: "Hello",
    };
  }
  //   Event handler containing set state function to change the state
  //   You can also use this.State or this.Previous state here then update the last state in setState

  onPressHandler() {
    this.setState({
      first: "Bye",
    });
  }

  render() {
    return (
      <View>
        <Text>{this.state.first}</Text>
        {/* Calling event handler onpresshandler */}

        <Button onPress={() => this.onPressHandler()} />
      </View>
    );
  }
}

export default myScreen;

const styles = StyleSheet.create({});
