import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
  },
  contenedor: {
    flex: 1,
    backgroundColor: '#f261e1',
    alignItems: 'center', // propiedad 'alingContent' a 'alignItems'
    justifyContent: 'center',

  },
  contenedorFlat: {
    flex: 1,
    backgroundColor: '#f261e1',
    alignItems: 'center', // propiedad 'alingContent' a 'alignItems'
    justifyContent: 'center',
    paddingTop: 35,
    flexDirection: "row", // permite visualizar el texto en una sola fila
  },
  negrita: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  fuenteMorado: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#340985',
  },
  textInput: {
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    width: 200,
  },
  buttonStyle: {
    marginTop: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
    camera:{
      flex: 1,
      borderRadius: 20,
    },



});
