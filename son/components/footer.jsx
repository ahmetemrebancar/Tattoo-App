// components/footer.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      
      <Text style={styles.footerText}>Hakkimizda</Text>
      <Text style={styles.footerText}>İletişim:036636</Text>
      <Text style={styles.footerText}>Adresimiz:Üniversitemah</Text>
      <Text style={styles.footerText}>Ortaklarimiz</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#dcdcdc'
  },
  footerText: {
    color: '#333',
    fontSize: 16,
    
  },
});

export default Footer;
