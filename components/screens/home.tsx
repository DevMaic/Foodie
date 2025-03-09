import { View, Image, StyleSheet, ScrollView, Text } from "react-native"
import { TextBox } from "../textBox";
import { Categorias } from "../categorias";
import { banners, categorias, restaurantes } from "../../assets/dados";
import { Banners } from "../banners";
import { Restaurante } from "../restaurante";

export function Home() {
    return (
        <ScrollView style={styles.scrollViewStyle}>

            <View style={styles.homeHeader}>
                <Image style={styles.foodieLogo} source={require('../../assets/logo.png')}></Image>
                <Image style={styles.shoppingShartLogo} source={require('../../assets/cart.png')}></Image>
            </View>
            
            <TextBox placeHolder="O que vamos pedir hoje?"></TextBox>

            <ScrollView style={{marginTop: 16}} horizontal showsHorizontalScrollIndicator={false}>
                <Categorias dados={categorias}></Categorias>
            </ScrollView>

            <ScrollView style={{marginTop: 16}} horizontal showsHorizontalScrollIndicator={false}>
                <Banners dados={banners}></Banners>
            </ScrollView>
            
            <Text>Destaques</Text>

            {
                restaurantes.map((restaurante, index) => {
                    return (
                    <View key={index}>
                        <Restaurante
                            logotipo={restaurante.logotipo}
                            nome={restaurante.nome}
                            endereco={restaurante.endereco}
                            icone={require('../../assets/favorito-full2.png')}
                        />
                    </View>
                    )
                })
            }

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 50
    },
    verticalScrollViewStyle: {
        marginTop: 16
    },
    homeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    foodieLogo: {
        height: 50,
        width: 140,
        objectFit: "scale-down"
    },
    shoppingShartLogo: {
        height: 50,
        width: 40,
        objectFit: 'scale-down',
    }
});