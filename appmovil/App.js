//componentes React Native
import { StyleSheet } from 'react-native'
//navegacion
import { NavigationContainer } from '@react-navigation/native'
//pantallas
import { Tabs } from './components/Tabs'
import { NavGabetero } from './components/Drawer'
import { TopTabs } from './components/TopTabs'


const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#7734eb',
    marginTop: 100,
    marginLeft: 12,
    marginRight: 12,
  }
})

/* los elementos htlm son PROPS */
export default function App() {
  return (<NavigationContainer style={estilo.container}>
    <Tabs></Tabs>
    {/*<NavGabetero></NavGabetero>*/}
    {/*<TopTabs/>*/}
  </NavigationContainer>
  )
}