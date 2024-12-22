import React, { useCallback, useState } from 'react';
import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
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

import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
//import backgroundImage from '../assets/images/goToPurpose.jpg';
//import backgroundImage from '../assets/images/droplet.jpeg';
//import backgroundImage from '../assets/images/resizePur.jpeg';
import backgroundImage from '../assets/images/WhiteHouseatNight.jpeg';

const ChatScreen = (props) => {
  // const navigation = useNavigation();
  const [messageText, setMessageText] = useState('');
  console.log(messageText);

  const sendMessage = useCallback(() => {
    setMessageText('');
  }, [messageText]);

  return (
    <SafeAreaView
      edges={['right', 'left', 'bottom']}
      style={styles.container}
    >
      {/* ios cihaz yada emulatorde textInput a bastığımız zaman klavye çıkıyor ve textInput kısmı altta kalıyor bunun önüne geçebilmek için yapılması gereken bazı aktiviteler var  */}
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        //behaviore ios cihazlar ile uyumlu çalşıyor ancak android cihazlarda var olan yapıyı bozuyor  bu yüzden Platform.OS ile sadece ios cihazlarda behavior özelliğini kullanıyoruz.
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        ></ImageBackground>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => console.log('pressed!')}
          >
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colors.blue}
            />
          </TouchableOpacity>

          <TextInput
            style={styles.textBox}
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onSubmitEditing={sendMessage}
          />
          {messageText === '' && (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log('pressed!')}
            >
              <Feather
                name="camera"
                size={24}
                color={colors.blue}
              />
            </TouchableOpacity>
          )}

          {messageText !== '' && (
            <TouchableOpacity
              style={{ ...styles.mediaButton, ...styles.sendButton }}
              onPress={sendMessage}
            >
              <Feather
                name="send"
                size={20}
                color={'white'}
              />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
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
  screen: {
    flex: 1,
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
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    width: 35,
    padding: 7,
  },
});
