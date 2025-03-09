import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type propsType = {
    dados: {
        id: number
        descricao: string
        icone: any
    }[]
}

export function Categorias(props: propsType) {
    return (
        <>
            {
                props.dados.map((categoria, index) => {
                    return (
                        <View key={index} style={styles.categoriaStyle}>
                            <Image style={styles.imageStyle} source={categoria.icone}/>
                            <Text>{categoria.descricao}</Text>
                        </View>
                    )
                })
            }
        </>
    )       
}

const styles = StyleSheet.create({
    categoriaStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        objectFit: "scale-down",
        height: 50,
        width: 70
    }
})