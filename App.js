import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './src/components/AppHeader';
import AppHeader from './src/components/listProps';

export default class App extends React.Component {
  render() {
    return (
      <AppHeader 
        title = "Offwiki"
        version = "v.0.1"
      />
      <listProps />
    );
  }
}

const styles = StyleSheet.create();
