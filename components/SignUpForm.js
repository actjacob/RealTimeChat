import React from 'react';
import Input from '../components/Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';

const SignUpForm = (props) => {
  const inputChangeHandler = (inputId, inputValue) => {
    console.log('InputId:' + inputId);
    console.log('InputValue:' + inputValue);
  };

  return (
    <>
      <Input
        id="firstName"
        label="First name"
        icon="user-o"
        iconPack={FontAwesome}
        iconSize={20}
        onInputChanged={inputChangeHandler}
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        iconSize={20}
        onInputChanged={inputChangeHandler}
      />
      <Input
        id="email"
        label="E-mail"
        icon="mail"
        iconPack={Feather}
        iconSize={20}
        onInputChanged={inputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        iconSize={20}
        onInputChanged={inputChangeHandler}
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
