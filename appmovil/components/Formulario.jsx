import { Text, View , TextInput, Button, Alert} from 'react-native'
import { styles } from '../styles/contenedores'
import {Encabezado} from './Encabezado'
import {Texto1} from './Texto1'
import { Logo } from './Logo'
import { useState } from 'react' //para manejar el estado de la APP

/*los state son una funcion de react que permite hacer get y set de 
estados de las variables, en este caso state es la varible y su valor actual (metodo get)
y set es el valor a cambiar de esta
const [state, setState] = useState(initialState)*/

/* los TextInput pueden usar propiedades como onChangeText, placeHolder, keyboard */
export const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    return  <View style={styles.contenedor}>
    <Logo></Logo>
    <Text>Hola a todos esta es la app del</Text>

    <Encabezado texto={"Temach, puro pinche modo guerra"}></Encabezado>

    <Texto1 texto={"usted no llore por una morrilla mi compa"} destacar={true}></Texto1>

    <Text>Nombre: </Text>

    <TextInput
      onChangeText={(e) => { setNombre(e) }}
      value={nombre}
      placeholder='Ingrese su nombre'
      keyboardType='email-address'
      style={styles.textInput}
    ></TextInput>

    <Texto1 texto={'Su nombre es: ' + nombre + ', mucho gusto'}></Texto1>

    <Text>Edad: </Text>

    <TextInput
      onChangeText={(e) => { setEdad(e) }}
      value={edad}
      placeholder='ej. 24'
      keyboardType='numeric'
      style={styles.textInput}
    ></TextInput>

    <Texto1 texto={'Su edad es: ' + edad + ' anios, que Wrande  ͡° ͜ʖ ͡°.'}></Texto1>

    <View style={styles.buttonStyle}>
      <Button title='apachurrale bro' color='#0dd6cf' onPress={() => 
        { console.log(nombre, edad) 
        Alert.alert("Mensaje",`Hola ${nombre} con edad: ${edad}` )
        }}>

      </Button>
    </View>
    </View>
    }
/* usar Alt + 96 para comillas especiales */