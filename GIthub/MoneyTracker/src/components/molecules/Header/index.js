import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 108,
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 37,
    paddingBottom: 38,
    paddingLeft: 24,
  },
});