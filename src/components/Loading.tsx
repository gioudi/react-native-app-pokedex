import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export const Loading = () => {
  return (
    <View
      style={{
        ...styles.pkdActivityContainer,
      }}>
      <ActivityIndicator size={50} color="grey" />
      <Text>Loading ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pkdActivityContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
