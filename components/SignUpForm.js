import React from 'react';
import Input from '../components/Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';

const SignUpForm = (props) => {
  return (
    <>
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
    </>
  );
};

export default SignUpForm;
