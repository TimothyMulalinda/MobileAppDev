import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HomeHeader = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Image
        style={styles.image}
        source={require('../../../screens/assets/img/image.png')}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    height: 108,
    width: '100%',
    paddingTop: 37,
    paddingBottom: 38,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  image: {
    borderRadius: 10,
  },
});