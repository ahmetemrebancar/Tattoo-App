// components/resimler.jsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Button } from 'react-native';

const Deneme = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
  const images = [
    "https://timucindegirmenci.com/images/portfolio/28-golgeli-kadin-dovme-modelleri.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3I6e-kh3OOWpd5qyXIWE41rU-RuZCrDrNVUmi5BQ44zVFMXFLLnZAV0h2Ev8Dg_fBgs0&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XwIh9vCbd3sIdCQ1iCckfDSR0PN-pzXRvbtkXL9caSFeGjmmKtt5ZRP77A0Dg3IMLzA&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIS7zS0hmIon-j8cslCBfcOafZghIx2dlIA&usqp=CAU",

    
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex < images.length - 1) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const changeImage = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    } else if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: images[currentImageIndex] }} />
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => changeImage('prev')}>
  <Text style={styles.buttonText}>Önceki Resim   </Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => changeImage('next')}>
  <Text style={styles.buttonText}>   Sonraki Resim</Text>
</TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 300,
    borderWidth: 5,
    borderColor: '#555',
  },  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  
   
  },
  buttonText: {
    color: 'black',
    fontSize: 19,
    
    borderRadius: 5,
    
  },
});

export default Deneme;
