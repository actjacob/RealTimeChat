import React, { useState } from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableNativeFeedbackBase,
  TouchableNativeFeedbackComponent,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

import backgroundImage from '../assets/images/goToPurpose.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
// import backgroundImage from '../assets/images/droplet.jpeg';

const ChatScreen = (props) => {
  // const navigation = useNavigation();
  const [messageText, setMessageText] = useState('');
  console.log(messageText);

  return (
    <SafeAreaView edges={['right', 'left', 'bottom']} style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}></ImageBackground>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.mediaButton} onPress={() => console.log('pressed!')}>
          <AntDesign name="pluscircleo" size={24} color={colors.blue} />
        </TouchableOpacity>

        <TextInput
          style={styles.textBox}
          value={messageText}
          onChangeText={(text) => setMessageText(text)}
        />
        {messageText === '' && (
          <TouchableOpacity style={styles.mediaButton} onPress={() => console.log('pressed!')}>
            <Feather name="camera" size={24} color={colors.blue} />
          </TouchableOpacity>
        )}

        {messageText !== '' && (
          <TouchableOpacity style={styles.mediaButton} onPress={() => console.log('pressed!')}>
            <Feather name="send" size={24} color={colors.blue} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 12,
    // justifyContent: 'space-between',
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGray,
    marginHorizontal: 15,
    paddingHorizontal: 12,
    paddingTop: 0,
    textAlignVertical: 'center',
    // height: 40,
  },
  mediaButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    // backgroundColor: 'red',
  },
});
