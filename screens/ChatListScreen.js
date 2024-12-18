import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatListScreen = (props) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello everyone!</Text>
      <Text style={styles.text}>Chat List Screen</Text>
      <Text style={styles.text}>Deneme</Text>

      <Button
        title="Go to Chat screen"
        onPress={() => {
          props.navigation.navigate('ChatScreen');
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
