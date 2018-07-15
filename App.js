import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import Header from './src/Components/Header';
import LoginForm from './src/Components/LoginForm'

export default class App extends React.Component  {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAKn4XiSd7ll7YQUEAXG1_Xo1_a7iZ13CU",
      authDomain: "rn-firebase-modules.firebaseapp.com",
      databaseURL: "https://rn-firebase-modules.firebaseio.com",
      projectId: "rn-firebase-modules",
      storageBucket: "rn-firebase-modules.appspot.com",
      messagingSenderId: "913973425497"
    };
    firebase.initializeApp(config);
  }
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
