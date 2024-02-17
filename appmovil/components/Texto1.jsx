import { Text, View } from 'react-native'
import { styles } from '../styles/contenedores'

export const Texto1 = ({texto}) => {
    return <View>
      <Text style = {styles.fuenteMorado}>{texto}</Text>
    </View>
  }