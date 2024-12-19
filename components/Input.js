import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import colors from '../constants/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label} </Text>

      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 15}
            style={styles.icon}
          />
        )}
        <TextInput style={styles.input} />
      </View>

      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText} </Text>
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginVertical: 8,
    fontFamily: 'bold',
    letterSpacing: 0.3,
    color: colors.textColor,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: colors.nearlyWhite,
    flexDirection: 'row',
    alignItems: 'center', // dikeyde hizalama
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 2,
  },
  icon: {
    marginRight: 10,
    color: colors.gray,
  },
  input: {
    color: colors.textColor,
    flex: 1,
    fontFamily: 'regular',
    letterSpacing: 0.3,
    //paddingTop: 0,
  },
  errorContainer: {
    marginVertical: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    fontFamily: 'regular',
    letterSpacing: 0.3,
  },
});
