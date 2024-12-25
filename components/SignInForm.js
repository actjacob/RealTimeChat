import React, { useCallback, useReducer } from 'react';
import Input from '../components/Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';

const initialState = {
  inputValues: {
    email: '',
    password: '',
  },
  inputValidities: {
    email: false,
    password: false,
  },
  formIsValid: false,
};

const SignInForm = (props) => {
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
        errorText={formState.inputValidities['email']}
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
        errorText={formState.inputValidities['password']}
      />

      <SubmitButton
        title="Sign in"
        onPress={() => console.log('Button Pressed)')}
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignInForm;
