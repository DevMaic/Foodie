import { ScrollView, StyleSheet, View } from "react-native";
import { Header } from "../header";
import { TextBox } from "../textBox";
import { Button } from "../button";
import { useState } from "react";
import { COLORS } from "../theme";

export function CadastroEndereco(props: any) {
    const [cidade, setCidade] = useState('')
    const [Uf, setUf] = useState('')
    const [bairro, setBairro] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cep, setCep] = useState('')

    function onPress() {
        props.navigation.navigate('cadastro-endereco')
    }

    return(
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
    
                    <Header text='crie sua conta'/>

                    <View style={styles.formStyle}>
                        <View style={styles.textFieldStyle}>
                            <View style={styles.doubleBoxStyle}>
                                <View style={styles.doubleBoxStyle70}>   
                                    <TextBox onChangeText={(texto: string)=>setCidade(texto)} text='Cidade'/>
                                </View>
                                <View style={styles.doubleBoxStyle30}>
                                    <TextBox onChangeText={(texto: string)=>setUf(texto)} text='UF'/>
                                </View>
                            </View>
                            <TextBox onChangeText={(texto: string)=>setBairro(texto)} text='Bairro'/>

                            <View style={styles.doubleBoxStyle}>
                                <View style={styles.doubleBoxStyle70}>   
                                    <TextBox onChangeText={(texto: string)=>setEndereco(texto)} text='Endereço'/>
                                </View>
                                <View style={styles.doubleBoxStyle30}>
                                    <TextBox onChangeText={(texto: string)=>setComplemento(texto)} text='Compl.'/>
                                </View>
                            </View>

                            <TextBox onChangeText={(texto: string)=>setCep(texto)} text='CEP'/>
                            
                        </View>
                        <Button onPress={onPress} text='Criar conta'/>
                    </View>

            </View>
        </ScrollView>
)
}

const styles = StyleSheet.create({
    doubleBoxStyle: {
        flexDirection: 'row'
    },
    doubleBoxStyle70: {
        width: '67%',
        marginRight: '6%'
    },
    doubleBoxStyle30: {
        width: '27%',
    },
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
    footerStyle: {
        flex: 1,
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
        backgroundColor: COLORS.white
    }
})