import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ChatSettingsScreen from './ChatSettingsScreen';
import { useNavigation } from '@react-navigation/native';

const ChatListScreen = (props) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello everyone!</Text>
      <Text style={styles.text}>Chat List Screen</Text>
      <Text style={styles.text}>Deneme</Text>

      <Button
        title="Go to Settings"
        onPress={() => {
          props.navigation.navigate('ChatSettings');
        }}
      />
      {/* <Button
        title="Go to sET"
        onPress={() => {
          navigation.navigate('ChatSettings');
        }}
      /> */}
    </View>
  );
};

export default ChatListScreen;

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
