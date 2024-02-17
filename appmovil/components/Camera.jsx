
import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

export const Camara = () => {
    // Estado para verificar los permisos de la cámara
    const [hasPermission, setHasPermission] = useState(null)

    // Estado para controlar el tipo de cámara (frontal o trasera)
    const [type, setType] = useState(Camera.Constants.Type.back)

    // Estado para controlar el modo de flash de la cámara
    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off)

    // Ref para acceder al componente de cámara
    const cameraRef = useRef(null)

    // Función para verificar y solicitar permisos de la cámara
    const checkCameraPermission = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted')
    };

    // Función para capturar una foto utilizando la cámara
    const takePicture = async () => {
        if (cameraRef.current) {
            // Captura la foto con opciones de calidad y formato base64
            const photo = await cameraRef.current.takePictureAsync()

            // Llama a la función para guardar la foto en la galería
            savePictureToLibrary(photo.uri)
        }
    };

    // Función para guardar la foto en la galería
    const savePictureToLibrary = async (uri) => {
        try {
            // Guarda la foto en la galería utilizando Expo MediaLibrary
            await MediaLibrary.saveToLibraryAsync(uri)
            alert('Foto guardada en la galería');
        } catch (error) {
            console.error('Error al guardar la foto:', error)
        }
    };

    // Función para alternar entre los modos de flash (encendido/apagado)
    const toggleFlash = () => {
        setFlashMode((prevMode) => (prevMode === 'on' ? 'off' : 'on'));
    };

    // Renderiza el componente de la cámara con los botones de captura y flash
    return (
        <View style={{ flex: 1 }}>
            <Camera
                style={{ flex: 1 }}
                type={type}
                flashMode={flashMode}
                ref={cameraRef}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginBottom: 20,
                    }}
                >
                    {/* Botón para tomar una foto */}
                    <TouchableOpacity onPress={takePicture}>
                        <Text style={{ fontSize: 20, marginBottom: 10, color: 'white' }}>
                            Tomar Foto
                        </Text>
                    </TouchableOpacity>

                    {/* Botón para alternar el modo de flash */}
                    <TouchableOpacity onPress={toggleFlash}>
                        <Text style={{ fontSize: 20, color: 'white' }}>
                            Flash: {flashMode === 'on' ? 'Encendido' : 'Apagado'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}




