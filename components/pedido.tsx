import React from "react";
import { View, Text, ImageSourcePropType, Image, StyleSheet } from "react-native";
import { COLORS } from "./theme";

type propsType = {
    nome: string
    endereco: string
    status: string
    dt_pedido: string
    vl_total: number
    logotipo: ImageSourcePropType | undefined 
}

export function Pedido(props: propsType) {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.restaurantLogoStyle}source={props.logotipo}/>
            <View style={styles.informationContainerStyle}>
                <Text>{props.nome}</Text>
                <View style={styles.orderInformationStyle}>
                    <Text style={styles.textInsideOrderInformationStyle}>{new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(props.vl_total)}</Text>
                    <Text style={styles.textInsideOrderInformationStyle}>{props.dt_pedido}</Text>
                </View>
                <Text style={styles.orderStatusStyle}>{props.status}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInsideOrderInformationStyle: {
        color: COLORS.medium_gray,
    },	
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    restaurantLogoStyle: {
        width: 80,
        height: 80,
        objectFit: "cover",
        borderRadius: 8,
    },
    informationContainerStyle: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 5,
    },
    orderInformationStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderStatusStyle: {
        color: COLORS.green,
        
    }
});