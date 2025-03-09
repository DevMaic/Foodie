import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../header";
import { TextBox } from "../textBox";
import { Button } from "../button";
import { useState } from "react";
import { COLORS } from "../theme";

export function Login(props: any) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    
    function onPress() {
    }

    function handleCreateAccount() {
        props.navigation.navigate('cadastro')
    }

    return(
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                    <Header text='Acesse sua conta'/>
                    <View style={styles.formStyle}>
                        <View style={styles.textFieldStyle}>
                            <TextBox onChangeText={(texto: string)=>setEmail(texto)} text='E-mail'/>
                            <TextBox onChangeText={(texto: string)=>setSenha(texto)} text='Senha'/>
                        </View>
                        <Button onPress={onPress} text='Acessar'/>
                    </View>
                    
                    <TouchableOpacity onPress={handleCreateAccount} style={styles.footerStyle}>
                        <Text style={styles.textStyle}>Criar minha conta</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        marginTop: 40,
        backgroundColor: COLORS.white,
        paddingTop: 100
    },
    formStyle: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25
    },
    footerStyle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 16
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
        backgroundColor: COLORS.white,
    }
})