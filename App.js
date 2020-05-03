import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SensorView from "./sensor-view/sensor-view.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Stuff and Things
      </Text>
      <SensorView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
