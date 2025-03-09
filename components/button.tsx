import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONT_SIZE } from "./theme";

type ButtonProps = {
    text: string,
    onPress: ()=>void
};

function Button(props: ButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.red,
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        fontSize: FONT_SIZE.lg
    },
});

export { Button }