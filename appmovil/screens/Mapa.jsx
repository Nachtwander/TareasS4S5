import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


const COORDENADAS = [
  {
    id: 1,
    titulo: 'Ubicacion 1',
    ubicacion: {
      latitude:14.1184408312265402,
      longitude:-86.44051536920097,
    },
    descripcion: 'aqui asaltan al que no ande ojo al cristo'
  },
  {
    id: 2,
    titulo: 'Ubicacion 2',
    ubicacion: {
      latitude:15.1184408312265402,
      longitude:-84.44051536920097,
    },
    descripcion: 'aqui asaltan al que no ande ojo al cristo'
  },
  {
    id: 3,
    titulo: 'Ubicacion 3',
    ubicacion: {
      latitude:13.1184408312265402,
      longitude:-86.44051536920097,
    },
    descripcion: 'aqui asaltan al que no ande ojo al cristo'
  },
]

//los Markers funcionan para marcar el mapa segun las coordenadas de ubicacion
//pueden tener titulo y descripcion, draggable permite mover un marcador y ubicarlo
//en otra parte del mapa en la app.

export function Mapa() {
  function mostrarPOI(){
    return COORDENADAS.map((ubicacion) =>{
      return <Marker
      key={ubicacion.id}
      coordinate={ubicacion.ubicacion}
      title={ubicacion.titulo}
      descripcion={ubicacion.descripcion}
    />
    })
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {mostrarPOI()}
      {/*<Marker
        draggable
        coordinate={{
          latitude: 14.1184408312265402,
          longitude: -86.44051536920097,
        }}
        title='aqui asaltan al que no ande ojo al cristo'
        description='salvese quien pueda'
      />
      <Marker
        draggable
        coordinate={{
          latitude: 15.1184408312265402,
          longitude: -85.44051536920097,
        }}
        title='aqui asaltan al que no ande ojo al cristo 2'
        description='salvese quien pueda 2'
      />*/}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});