import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type propsType = {
    dados: {
        id: number
        descricao: string
        icone: any
    }[]
}

export function Banners(props: propsType) {
    return (
        <>
            {
                props.dados.map((banners, index) => {
                    return (
                        <View key={index} style={styles.categoriaStyle}>
                            <Image style={styles.imageStyle} source={banners.icone}/>
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
        height: 150,
        width: 250
    }
})