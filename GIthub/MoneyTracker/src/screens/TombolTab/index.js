import React from 'react';
import Home from '../Home';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MenuIcon} from '../assets/icon'
import {IconHome} from '../assets/icon';

const Tab = createBottomTabNavigator();
const TombolTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: () => (
            <View style={styles.tab}>
              <IconHome />
              <MenuIcon />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TombolTab;

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 150,
  },
});