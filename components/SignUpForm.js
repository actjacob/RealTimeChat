import React, { useReducer } from 'react';
import Input from '../components/Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from '../utils/actions/formActions';

const reducer = (state, action) => {
  const { validationResult } = action;

  return {
    ...state,
    formIsValid: validationResult === undefined,
  };
};

const initialState = {
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
};

const SignUpForm = (props) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangeHandler = (inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({
      inputId: inputId,
      validationResult: result,
    });
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
        autoCapitalize="none"
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        iconSize={20}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
      />
      <Input
        id="email"
        label="E-mail"
        icon="mail"
        iconPack={Feather}
        iconSize={20}
        onInputChanged={inputChangeHandler}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        autoCapitalize="none"
        secureTextEntry
        iconPack={Feather}
        iconSize={20}
        onInputChanged={inputChangeHandler}
      />

      <SubmitButton
        title="Sign Up"
        onPress={() => console.log('Button Pressed)')}
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignUpForm;
