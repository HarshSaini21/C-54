import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component {
  displayAlert = () => {
    alert('Your response has gone to the teacher.');
  };

  render() {
    return (
      <Button
        color={this.props.favouritecolor}
        title="Click Me"
        onPress={this.displayAlert}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <AnyColorButton favouritecolor="blue" />

        <AnyColorButton favouritecolor="black" />
        <Text>My First React Component</Text>
      </View>
    );
  }
}
