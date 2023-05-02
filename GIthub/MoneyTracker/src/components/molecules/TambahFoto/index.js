import React from 'react';
import {View, StyleSheet, Text, br} from 'react-native';

const TambahFoto = () => {
  return (
    <View style={styles.borderLingkaran}>
      <View style={styles.lingkaran}>
        <Text style={styles.text}>Add Photo</Text>
      </View>
    </View>
  );
};

export default TambahFoto;

const styles = StyleSheet.create({
  borderLingkaran: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    borderWidth: 3,
    borderStyle: 'dashed',
    borderRadius: 150 / 2,
    borderColor: '#8D92A3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 26,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  lingkaran: {
    backgroundColor: '#F0F0F0',
    width: 125,
    height: 125,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
});