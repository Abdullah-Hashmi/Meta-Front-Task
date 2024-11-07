import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Recents = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recents</Text>
    </View>
  );
};

export default Recents;

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container take up the full screen
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
