import { TextInput, Text, StyleSheet, View } from "react-native";
import { COLORS } from "./theme";
import React from "react";

type textBoxProps = {
    text?: string
    fontSize?: number
    placeHolder?: string
    onChangeText?: (texto: string)=>void
}

export function TextBox({fontSize = 22, ...props}: textBoxProps) {
    return (
        <>
            <View  style={styles.textStyle}>
                {props.text && <Text style={[styles.textStyle, {fontSize}]}>{props.text}</Text>}
                <TextInput placeholder={props.placeHolder} onChangeText={props.onChangeText} style={styles.textInputStyle}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: COLORS.light_gray,
        borderRadius: 5,
        height: 50,
        width: '100%',
        fontSize: 18,
        borderColor: COLORS.medium_gray,
        borderWidth: 1,
        padding: 10
    },
    textStyle: {
        alignItems: 'flex-start',
        width: '100%'
    }
})