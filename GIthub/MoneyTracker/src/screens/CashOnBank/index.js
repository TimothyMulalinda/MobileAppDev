import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

import SubHeader from '../../components/molecules/SubHeader';
import Gap from '../../components/atoms/Gap';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Pembayaran from '../../components/molecules/Pembayaran';

const CashOnBank = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SubHeader title="Cash On Bank" navigation={navigation} />

      <Gap />

      <TextInput label="Description" placeHolder="Add the description" />
      <TextInput label="Type" placeHolder="Debit / Credit" />

      <Button label="Save" backgroundColor="#02CF8E" textColor="#020202" />

      <Gap />

      <Text style={styles.Pembayaran}>Last 3 Pembayarans</Text>

      <Pembayaran
        date="17 April 2020"
        description="Water, Food"
        balance="-Rp. 300.000"
      />
      <Pembayaran
        date="18 April 2020"
        description="Office supplies"
        balance="-Rp. 300.000"
      />
      <Pembayaran
        date="19 April 2020"
        description="Top"
        balance="+Rp. 300.000"
      />
    </ScrollView>
  );
};

export default CashOnBank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Pembayaran: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: 'black',
    marginTop: 28,
    marginLeft: 28,
    marginRight: 28,
    marginBottom: 10,
  },
});