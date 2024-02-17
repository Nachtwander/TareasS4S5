import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//Iconografia
import Icon from 'react-native-vector-icons/Ionicons'
//componentes de pantalla
import { Ubicaciones } from '../screens/Ubicaciones'
import { Mapa } from '../screens/Mapa'
import { ScreenCamara } from '../screens/Camara'


//const tab de bottom navigator
const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return <Tab.Navigator style={{marginTop:40}}>
    <Tab.Screen name="Inicio" component={Ubicaciones} />
    <Tab.Screen name="Mapa" component={Mapa} />
    <Tab.Screen name="Settings" component={ScreenCamara} />
    
    </Tab.Navigator>
}