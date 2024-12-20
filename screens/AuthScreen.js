import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import Input from '../components/Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';

const AuthScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <Input
          label="First name"
          icon="user-o"
          iconPack={FontAwesome}
          iconSize={20}
        />
        <Input
          label="Last name"
          icon="user-o"
          iconPack={FontAwesome}
          iconSize={20}
        />
        <Input
          label="E-mail"
          icon="mail"
          iconPack={Feather}
          iconSize={20}
        />
        <Input
          label="Password"
          icon="lock"
          iconPack={Feather}
          iconSize={20}
        />

        <SubmitButton
          title="Sign Up"
          onPress={() => console.log('Button Pressed)')}
          style={{ marginTop: 20 }}
        />
      </PageContainer>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
