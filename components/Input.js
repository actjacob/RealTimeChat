import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import colors from '../constants/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.label} </Text>

      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 15}
            style={styles.icon}
          />
        )}
        <TextInput />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
});
