import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';

import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import colors from '../constants/colors';

import logo from '../assets/images/logo.png';

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === 'ios' ? 'height' : undefined}
            keyboardVerticalOffset={100}
          >
            <View style={styles.imageContainer}>
              <Image
                source={logo}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            {isSignUp ? <SignUpForm /> : <SignInForm />}
            <TouchableOpacity
              onPress={() => setIsSignUp((prevState) => !prevState)}
              style={styles.linkContainer}
            >
              <Text style={styles.link}>
                {`Switch to ${isSignUp ? 'Sign in' : 'Sign up'}`}
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  link: {
    color: colors.blue,
    fontFamily: 'medium',
    letterSpacing: 0.3,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
  },
});
