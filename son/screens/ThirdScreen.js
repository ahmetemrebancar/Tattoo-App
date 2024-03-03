import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Form Data: ', formData);
    resetForm();
  };

  const resetForm =() => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      age: "",
    });

  };

  return(
    
    <View style={styles.container}>
      <Text style={styles.title}>Müşteri Formu</Text>

      <Text style={styles.label}>Ad:</Text>
      <TextInput
        style={styles.input}
        value={formData.firstname}
        onChangeText={(text) => handleInputChange('firstname', text)}
        placeholder="Adinizi giriniz :"
        placeholderTextColor="#888"
  />

      <Text style={styles.label}>Soyad:</Text>
      <TextInput
        style={styles.input}
        value={formData.lastname}
        onChangeText={(text) => handleInputChange('lastname', text)}
        placeholder="Soyadinizi giriniz :"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
        keyboardType="email-address"
        placeholder="Email adresinizi giriniz :"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Yas:</Text>
      <TextInput
        style={styles.input}
        value={formData.age}
        onChangeText={(text) => handleInputChange('age', text)}
        placeholder  ="Yasinizi giriniz :"
        placeholderTextColor="#888"
      />
      <Button style={styles.buton} title="Gönder" onPress={handleSubmit} />
      
  </View>
  
  );
};

const styles = StyleSheet.create({
  label: {
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:"center",
  },
  container: {
    backgroundColor:'#f0f0f0',
    fontSize: 16,
    marginBottom: 4,
    paddingHorizontal: 64, 
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    alignItems:"center",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom:16,
    paddingHorizontal: 8,
  },
});

export default MyForm;