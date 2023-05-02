import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Line from '../../atoms/Line';

const Balance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Balance</Text>
      <Text style={styles.balanceNumber}>Rp. 10.000.000</Text>
      <Line />
      <View style={styles.containerBalance}>
        <View>
          <Text style={styles.deskripsiBalance}>Cash On Hand</Text>
          <Text style={styles.deskripsiBalance}>Cash On Bank</Text>
        </View>
        <View>
          <Text style={styles.resultNumber}>Rp. 4.000.000</Text>
          <Text style={styles.resultNumber}>Rp. 6.000.000</Text>
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
  },
  balanceNumber: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 14,
  },
  containerBalance: {
    flexDirection: 'row',
    columnGap: 10,
  },
  deskripsiBalance: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  resultNumber: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});