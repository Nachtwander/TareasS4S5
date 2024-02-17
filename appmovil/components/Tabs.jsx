//Iconografia
import Icon from 'react-native-vector-icons/Ionicons'

//navegacion
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'

//componentes de pantalla
import { Ubicaciones } from '../screens/Ubicaciones'
import { Mapa } from '../screens/Mapa'
import { ScreenCamara } from '../screens/Camara'


//const tab de bottom navigator
const Tab = createBottomTabNavigator();

//el screenOptions se usa para colocar iconos en el Tab.Navigator
//los iconos son de 'react-native-vector-icons/Ionicons'
//se determina un nombreIcono para usarlo en un switch y determinar si el icono esta focus o no
//segun este focus o no, el icono va a cambiar eentre uno con relleno y otro outline
// el <Icon> se maneja con name, size y color
export const Tabs = () => {
    return <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon: ({focused, color, size}) => {
            let nombreIcono

            switch (route.name) {
                case 'Inicio':
                    nombreIcono = focused ? "home" : "home-outline"
                    break;
                case 'Mapa':
                    nombreIcono = focused ? "map" : "map-outline"
                    break;
            
                default:
                    nombreIcono = focused ? "settings" : "settings-outline"
                    break;
            }
            return<Icon
            name={nombreIcono}
            size={size}
            color={color}
            />
        }
    })}>
    <Tab.Screen name="Inicio" component={Ubicaciones} />
    <Tab.Screen name="Mapa" component={Mapa} />
    <Tab.Screen name="Camara" component={ScreenCamara} />
    
    </Tab.Navigator>
}