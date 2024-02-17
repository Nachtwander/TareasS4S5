import { StatusBar } from 'expo-status-bar'
import { View, FlatList } from 'react-native'
import { Formulario } from '../components/Formulario'
import { styles } from '../styles/contenedores'
import { EleFlatList } from '../components/EleFlatList'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


/*siempre que se utiliza informacion estatica generalmente se le asigna a la varible
un nombre en mayusculas */
const DATA = [
  {
    id: 1,
    src: "https://i.redd.it/dlpmhveeeshz.png",
    titulo: "Ayuda, no he dormido bien en 7 dias",
    descripcion: "traigan coca cola porfa"
  },
  {
    id: 2,
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHRM2ihi7ESei7uyBUFrO_akhCV2zYdCJ5hNNmldxM9FO3LO_klEfGmrf4TPhSKrTmwvEmVvBDtKN6vRKRsPR-VJPbO9vcj6PdBLGYoC7zgddJxhgDSwoN4Hj4H9Tnqo1RmDtQOEDTuX8/s1600/21751563_1103674139767474_3047173477940424241_n.jpg",
    titulo: "Prado",
    descripcion: "Tegucigalpa"
  },
  {
    id: 3,
    src: "https://i.ytimg.com/vi/IvMnluZrIHU/maxresdefault.jpg",
    titulo: "Centro America",
    descripcion: "Tegus"
  },
]
//const tab de bottom navigator
const Tab = createBottomTabNavigator();

/* los elementos htlm son PROPS */
export const Ubicaciones = () => {
  return (
    <View style={styles.contenedor}>
      
      <FlatList
        data={DATA}
        renderItem={({ item }) => <EleFlatList src={item.src} titulo={item.titulo} descripcion={item.descripcion} />}
        keyExtractor = { item => item.id}
      />
      {/*<Formulario></Formulario>*/}
      
      <StatusBar style="auto" />

    </View>
  );
}