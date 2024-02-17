import { Text, Image, StyleSheet, View} from 'react-native'

/* para visualizar una imagen se le deben aplicar estilos 

en la carpeta assets nosotros incluimos recursos que son locales en
nuestra app*/

export const Logo = () =>{
    return <View style={{paddingTop: 50}}>
        <Image
            style={{width:150, height:150}}
            source={{uri: 'https://imgs.elpais.com.uy/dims4/default/c3c5745/2147483647/strip/true/crop/696x479+0+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2F9a%2F30%2Ffe895cb44066aec62294d48f4649%2Fel-temach.JPG'}}
        />
    </View>

}