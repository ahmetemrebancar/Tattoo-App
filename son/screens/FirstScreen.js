// screens/FirstScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Deneme from '../components/resimler'; // Deneme bileşenini import et

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.content}>
        <Deneme />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    padding: 0,
  },
});

export default FirstScreen;
