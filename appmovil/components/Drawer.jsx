import { createDrawerNavigator } from '@react-navigation/drawer'

//componentes de pantalla
import { Ubicaciones } from '../screens/Ubicaciones'
import { Mapa } from '../screens/Mapa'
import { ScreenCamara } from '../screens/Camara'

const Drawer = createDrawerNavigator();

export function NavGabetero() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Ubicaciones} />
      <Drawer.Screen name="Mapa" component={Mapa} />
      <Drawer.Screen name="Camara" component={ScreenCamara} />
    </Drawer.Navigator>
  );
}