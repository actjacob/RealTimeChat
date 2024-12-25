import React, { useCallback, useReducer } from 'react';
import Input from '../components/Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from '../utils/actions/formActions';
import { validate } from 'validate.js';
import { reducer } from '../utils/reducers/formReducer';
import { signUp } from '../utils/actions/authActions';

const initialState = {
  inputValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },

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

  const inputChangeHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({
        inputId,
        validationResult: result,
        inputValue,
      });
    },
    [dispatchFormState]
  );

  const authHandler = () => {
    signUp(
      formState.inputValues.firstName,
      formState.inputValues.lastName,
      formState.inputValues.email,
      formState.inputValues.password
    );
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
        errorText={formState.inputValidities['firstName']}
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        iconSize={20}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
        errorText={formState.inputValidities['lastName']}
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
        errorText={formState.inputValidities['email']}
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
        errorText={formState.inputValidities['password']}
      />

      <SubmitButton
        title="Sign Up"
        onPress={authHandler}
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignUpForm;
