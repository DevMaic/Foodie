import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Header } from "../header";
import { TextBox } from "../textBox";
import { Button } from "../button";
import { useState } from "react";
import { COLORS } from "../theme";

export function Cadastro(props: any) {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')

    function onPress() {
        props.navigation.navigate('cadastro-endereco')
    }

    function onTextChange() {

    }

    return(
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                    <Header text='crie sua conta'/>
                    <View style={styles.formStyle}>
                        <View style={styles.textFieldStyle}>
                            <TextBox onChangeText={(texto: string)=>setNome(texto)} text='Nome completo'/>
                            <TextBox onChangeText={(texto: string)=>setEmail(texto)} text='E-mail'/>
                            <TextBox onChangeText={(texto: string)=>setSenha(texto)} text='Escolha uma senha'/>
                            <TextBox onChangeText={(texto: string)=>setConfirmacaoSenha(texto)} text='Confirme a senha'/>
                        </View>
                        <Button onPress={onPress} text='Próximo passo'/>
                    </View>
            </View>
        </ScrollView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 35,
        paddingRight: 35
    },
    formStyle: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25
    },
    textStyle: {
        fontSize: 20
    },
    textFieldStyle: {
        width: '100%',
        gap: 25,
        marginBottom: 50
    },
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: COLORS.white
    }
})