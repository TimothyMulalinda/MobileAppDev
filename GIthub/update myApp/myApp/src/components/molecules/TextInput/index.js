import React from 'react';
import { StyleSheet, Text, TextInput as Input, View } from 'react-native';

const TextInput = ({label, placeHolder, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <Input placeholder={placeHolder} style={styles.text} value={value} onChangeText={text => onChangeText(text)} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 20},
  label:{
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  text: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  }
});