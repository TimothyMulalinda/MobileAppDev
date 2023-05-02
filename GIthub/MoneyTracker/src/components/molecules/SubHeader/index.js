import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

import {ArrowBack} from '../../../screens/assets/icon';

const SubHeader = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowBack />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    height: 108,
    width: '100%',
    paddingTop: 37,
    paddingBottom: 38,
    paddingLeft: 24,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 32,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});