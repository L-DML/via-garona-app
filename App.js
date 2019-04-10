import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
        {/* <Text style={styles.listFuncTitle}>Wiki</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
