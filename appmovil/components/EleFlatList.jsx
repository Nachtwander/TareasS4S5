import { Text, Image, StyleSheet, View, TouchableOpacity, Alert, Modal, Pressable} from 'react-native'
import { styles } from '../styles/contenedores'
import { useState } from 'react'
import { ContenidoMModal } from './ContenidoModal'

// Alert.alert('TituloX', ''MensajeX)
// onPress={()=>{Alert.alert("se presiono el elemento ", `${titulo} ${descripcion}`)}}
//los modales tienen que ir dentro de los elementos, el usesState sirve para mostrarlo y ocultarlo.
export const EleFlatList = ({src, titulo, descripcion}) =>{
    const [modalVisible, setModalVisible] = useState(false)
    return <TouchableOpacity onPress={()=>setModalVisible(true)}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <ContenidoMModal
            img={src}
            titulo={titulo} 
            descripcion={descripcion}
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible} 
            
            textoBoton="Ocultar"
            ></ContenidoMModal>
        </Modal>
    <View style={styles.contenedorFlat}>

        {/*estos estilos ajustan la img, redondean, la mueven mas a la izquierda*/}
        <Image
            
            style={{width:100, height:100, marginRight:10, borderRadius:25}}
            source={{uri: src}}
        />
        <View style={{flexDirection:"column"}}>
            <Text> {titulo}</Text>
            <Text>{descripcion}</Text>
        </View>
        
    </View>
    </TouchableOpacity>

}

