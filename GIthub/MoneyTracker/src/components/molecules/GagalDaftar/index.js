import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignUpError = () => {
  return (
    <View style={styles.container}>
      <Text>Email sudah terdaftar pada aplikasi</Text>
    </View>
  );
};

export default SignUpError;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
});