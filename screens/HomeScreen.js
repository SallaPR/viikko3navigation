import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const HomeScreen = ({ navigation }) => (
  <View style={style.container}>
    <Text>Home Screen</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
