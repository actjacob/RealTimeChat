import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  text: {
    // color: '#3498db',
    color: 'black',
    fontSize: 18,
    fontFamily: 'thin',
    textAlign: 'center',
  },
});
