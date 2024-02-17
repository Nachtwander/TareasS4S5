import { Text, View } from 'react-native'
import { styles } from '../styles/contenedores'


/*se pueden utilizar estilos en estos View como style = {styles.NombreDelStyle}
mismo caso poara los text */

/* texto es un prop propio */
export const Encabezado = ({texto, destacar}) => {
  const estilo = ! (destacar === true) ? styles.negrita : styles.fuenteMorado
    return <View> 
      <Text style = {estilo}>{texto}</Text>
    </View>
  }

  /*Si la expresión (destacar === true) es falsa (es decir, destacar es false), entonces 
  asigna el estilo styles.negrita a la variable estilo. 
  Si la expresión (destacar === true) es verdadera (es decir, destacar es true), 
  entonces asigna el estilo styles.fuenteMorado a la variable estilo. */

//cuando usamos el default significa que vamos a 
//exportar esa funcion de forma predeterminada
//utilizar el export default es opcional 
//export default Encabezado