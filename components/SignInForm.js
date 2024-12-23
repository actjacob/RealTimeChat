import React from 'react';
import Input from '../components/Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from '../utils/actions/formActions';

const SignInForm = (props) => {
  const inputChangeHandler = (inputId, inputValue) => {
    console.log(validateInput(inputId, inputValue));
  };
  return (
    <>
      <Input
        id="email"
        label="E-mail"
        icon="mail"
        iconPack={Feather}
        iconSize={20}
        autoCapitalize="none"
        onInputChanged={inputChangeHandler}
        keyboardType="email-address"
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        iconSize={20}
        autoCapitalize="none"
        secureTextEntry
        onInputChanged={inputChangeHandler}
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
