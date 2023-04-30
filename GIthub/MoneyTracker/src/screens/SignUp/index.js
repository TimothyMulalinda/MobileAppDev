import React from 'react';
import {View, StyleSheet} from 'react-native';

import SubHeader from '../../components/molecules/SubHeader';
import Gap from '../../components/atoms/Gap';
import TambahFoto from '../../components/molecules/TambahFoto';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';


const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SubHeader title="Sign Up" navigation={navigation} />
      <Gap />
      <TambahFoto />
      <TextInput label="Full Name" placeHolder="Type your full name" />
      <TextInput label="Email Address" placeHolder="Type your email address" />
      <TextInput label="Password" placeHolder="Type your password" />
      <Button label="continue" backgroundColor="#02CF8E" textColor="#020202" />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});