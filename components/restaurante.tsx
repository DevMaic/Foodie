import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native"

type propsType = {
    logotipo: any
    nome: string
    endereco: string
    icone: ImageSourcePropType | undefined
}

export function Restaurante(props: propsType) {      
    return (
    <View style={styles.containerStyle}>
        <Image style={styles.imageStyle} source={props.logotipo}/>

        <View style={styles.nameStyle}>
            <Text>{props.nome}</Text>
            <Text>{props.endereco}</Text>
        </View>

        <Image style={styles.iconStyle} source={props.icone}/>
    </View>
    )
}

const styles = StyleSheet.create(
    {
        containerStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 4,
        },
        imageStyle: {
            flex: 1,
            width: 80,
            height: 80,
            borderRadius: 4,
        },
        nameStyle: {
            flex: 3,
            marginLeft: 10,
        },
        iconStyle: {
            flex: 1,
            objectFit: 'scale-down',
            width: 35,
            height: 35,
        }
    }
)