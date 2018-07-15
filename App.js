import React from 'react';
import { StyleSheet, View } from 'react-native';
// import firebase from 'firebase';
import Header from './src/Components/Header';
import LoginForm from './src/Components/LoginForm'

export default class App extends React.Component  {
  
  
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" ></Header>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }
});
