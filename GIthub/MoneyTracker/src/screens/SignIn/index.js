import React from 'react';
import {StyleSheet, View} from 'react-native';

import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';


const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Sign In" />
      <Gap />

      <TextInput label="Email Address" placeHolder="Type your email address" />
      <TextInput label="Password" placeHolder="Type your password" />

      <Button
        label="Sign In"
        backgroundColor="#02CF8E"
        textColor="#020202"
        navigation={navigation}
        toScreen="BottomTabs"
      />
      <Button
        label="Create New Account"
        backgroundColor="#8D92A3"
        textColor="white"
        navigation={navigation}
        toScreen="SignUp"
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});