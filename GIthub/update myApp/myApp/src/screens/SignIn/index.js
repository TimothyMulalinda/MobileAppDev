import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';

const SignIn = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const data = {
      userName: userName,
      password: password,
    };

    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>W E L C O M E</Text>
     
      <TextInput
        label="Username"
        placeHolder="Input ur Username"
        value={userName}
        onChangeText={setUsername}
      />
     
      <TextInput
        label="Password"
        placeHolder="Input ur Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
     
      <Button label="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 50,
  }});