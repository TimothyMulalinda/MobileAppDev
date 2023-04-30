import React from 'react';
import {View, Text, TextInput as Input, StyleSheet} from 'react-native';

const TextInput = ({label, placeHolder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.textInput} placeholder={placeHolder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 26,
    paddingLeft: 24,
    paddingRight: 24,
  },
  label: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
  },
});