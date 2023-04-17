import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onName = text => {
    setName(text);
  };
  const onUsername = text => {
    setUsername(text);
  };
  const onEmail = text => {
    setEmail(text);
  };
  const onAddress = text => {
    setAddress(text);
  };
  const onPhoneNumber = text => {
    setPhoneNumber(text.replace(/[^0-9]/g, '')); 
  };

  const handleRegister = () => {
    console.log(
      `Name: ${name}\nUsername: ${username}\nEmail: ${email}\nAddress: ${address}\nPhone Number: ${phoneNumber}`,
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Register</Text>

      <TextInput
        label="Name"
        placeholder="Masukkan nama lengkap anda"
        value={name}
        onChangeText={onName}
      />

      <TextInput
        label="Username"
        placeholder="Masukkan username anda"
        value={username}
        onChangeText={onUsername}
      />

      <TextInput
        label="Email"
        placeholder="Masukkan email anda"
        value={email}
        onChangeText={onEmail}
      />

      <TextInput
        label="Address"
        placeholder="Masukkan alamat anda"
        value={address}
        onChangeText={onAddress}
      />

      <TextInput
        label="Phone Number"
        placeholder="Masukkan nomor telepon anda"
        value={phoneNumber}
        keyboardType="numeric"
        onChangeText={onPhoneNumber}
      />
      
      <Button label="Register" onPress={handleRegister} />
    </ScrollView>
  );
};

export default Register;

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