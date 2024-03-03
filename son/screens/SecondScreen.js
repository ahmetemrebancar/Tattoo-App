import { useState } from "react";
import { Modal, TouchableOpacity, View, Image, Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView, } from "react-native";
const TattooPage = () => {
    const [modal, setModal] = useState(false);
    const [tattoo, setTattoo]= useState({width:0, height:0});
    const [imageId, setImageId] = useState();
    const openModal = (id) => {
        setImageId(id); 
        setModal(true);
    };
    const closeModal = () => {
        setImageId(); 
        setModal(false);
        setTattoo({width:0, height:0});
    };
    const next = () => {
        alert("   Görsel ID: " + imageId + "   Genişlik: "+ tattoo.width +"   Yükseklik: " + tattoo.height);
    };
    const images = [
        { id: 1, path: require('./tattoo.png'), name: '1'},
        { id: 2, path: require('./tattoo1.png'), name: '2'},
        { id: 3, path: require('./tattoo2.png'), name: '3'},
        { id: 4, path: require('./tattoo3.png'), name: '4' },
        { id: 5, path: require('./tattoo4.png'), name: '5'},
        { id: 6, path: require('./tattoo5.png'), name: '6'},
        { id: 7, path: require('./tattoo6.png'), name: '7'},
        { id: 8, path: require('./tattoo7.png'), name: '8' },
    ];
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style= {{color:'white', fontSize:30}}>Dövmeler</Text>
            </View>
            <ScrollView>
                <View style={styles.imagePage}>
                    {images.map((image, index) => (
                    <View key= {index} >
                        <TouchableOpacity onPress={() => openModal(image.id)}>
                            <Image source={image.path} style={styles.image}/>
                            <Text style={{fontSize: 30, textAlign: 'center'}}>{image.name}</Text> 
                        </TouchableOpacity>
                        <View style={styles.line}></View>
                    </View>
                    ))}
                </View>
            </ScrollView>
            
            <Modal visible={modal} transparent={true} animationType="slide" >
                <View style={styles.modal1}>
                    <KeyboardAvoidingView style={styles.modal2}>
                        <Text style={styles.modalText}>Görsel ID: {imageId}</Text>
                        <Text style={styles.modalText}> Ölçüleri Girin:</Text>
                        <TextInput
                            style={styles.modalText}
                            placeholder="Genişlik"
                            keyboardType="numeric"
                            onChangeText={(text) => setTattoo({ ...tattoo, width: text })}/>
                        <TextInput
                            style={styles.modalText}
                            placeholder="Yükseklik"
                            keyboardType="numeric"
                            onChangeText={(text) => setTattoo({ ...tattoo, height: text })}/>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button} onPress={closeModal}>
                                <Text style={{fontSize: 20, color: 'white'}}>Geri</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={next}>
                                <Text style={{fontSize: 20, color: 'white'}}>Devam</Text>
                            </TouchableOpacity> 
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal> 
       </View>  
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop: '9%',
        marginBottom: '22%',
        width:'100%', 
    },
    title:{
        backgroundColor: 'rgba(28, 72, 99, 1)',
        width:'100%',
        alignItems:'center',
    },
    imagePage:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(40, 101, 134,0.5)',
    },
    image: {
        width: 100,
        height :100,
        marginTop: '40%',
        marginLeft: '20%',
        borderRadius: 15,
        borderColor: 'rrgba(28, 72, 99, 1)',
        borderWidth: 2.5,
    },
    line: {
        width: '75%', 
        height: 1, 
        marginVertical: 5, 
        borderBottomWidth: 2, 
        borderBottomColor: 'rgba(28, 72, 99, 1)', 
        alignSelf: 'center', 
      },
    modal1:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal2: {
        backgroundColor: 'white',
        height: '50%',
        width: '90%', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0)',
        borderWidth: 3,
    },
    modalText:{
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
    },
    buttons:{
        flexDirection: 'row',
        marginTop: 10,
        width: '55%',
        height: '12%',  
    },
    button:{
        flex: 1,
        marginHorizontal: 10,
        backgroundColor:'rgba(28, 72, 99, 1)',
        alignItems:'center',
        borderRadius: 10,
        justifyContent: 'center', 
    }
});
export default TattooPage;