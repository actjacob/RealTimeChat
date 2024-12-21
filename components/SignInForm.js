import React from 'react';
import Input from '../components/Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';

const SignInForm = (props) => {
  return (
    <>
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
        title="Sign in"
        onPress={() => console.log('Button Pressed)')}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignInForm;
