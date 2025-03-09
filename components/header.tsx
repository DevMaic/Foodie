import { Image, StyleSheet, Text, View } from "react-native";

type propsType = {
    text: string
}

export function Header(props: propsType) {
    return (
        <View style={styles.headerStyle}>
            <Image style={styles.foodieLogoStyle} source={require('../assets/logo.png')}></Image>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    foodieLogoStyle: {
        height: 65,
        width: '65%',
    },
    headerStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})