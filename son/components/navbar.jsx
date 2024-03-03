// Navbar.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('FirstScreen')}>
        <Text style={styles.buttonText}>Ana Sayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
        <Text style={styles.buttonText}>Dövmeler</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
        <Text style={styles.buttonText}>Form</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor:'#2f4f4f',
    color:'white',
    height: 100,
    textAlign:'center',
  },
  buttonText: {
    textAlign: 'center',
    color:'white',
    fontSize:30,
  },
});

export default Navbar;
