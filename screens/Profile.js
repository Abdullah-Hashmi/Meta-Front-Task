import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming soon!</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container take up the full screen
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});
