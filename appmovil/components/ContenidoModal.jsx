import { View, Pressable, Text, StyleSheet, Image } from "react-native"
import { styles } from "../styles/contenedores"


export const ContenidoMModal = ({titulo, descripcion, modalVisible, setModalVisible, textoBoton, img}) => {
    return <View style={styles.centeredView}>
    <View style={styles.modalView}>

        <Image
            style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }}
            source={{ uri: img }}  // Mostramos la imagen recibida como prop
        />
        
        <Text style={styles.modalText}>{titulo}</Text>
        <Text style={styles.modalText}>{descripcion}</Text>
        
        <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>{textoBoton}</Text>
        </Pressable>
    </View>
</View>
}