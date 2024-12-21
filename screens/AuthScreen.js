import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';

import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import colors from '../constants/colors';

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        {isSignUp ? <SignUpForm /> : <SignInForm />}
        <TouchableOpacity
          onPress={() => setIsSignUp((prevState) => !prevState)}
          style={styles.linkContainer}
        >
          <Text style={styles.link}>
            {`Switch to ${isSignUp ? 'Sign in' : 'Sign up'}`}
          </Text>
        </TouchableOpacity>
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
});
