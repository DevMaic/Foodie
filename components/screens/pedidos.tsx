import { FlatList, StyleSheet, Image, View, Text, FlatListComponent } from "react-native";
import { pedidos } from "../../assets/dados";
import { Restaurante } from "../restaurante";
import { COLORS, FONT_SIZE } from "../theme";
import React from "react";
import { Pedido } from "../pedido";

export function Pedidos() {
  return (
    <View style={styles.favoriteRestaurantsViewStyle}>
        <FlatList data={pedidos} keyExtractor={(pedido) => pedido.id.toString()} showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            return <Pedido nome={item.nome} endereco={item.endereco} status={item.status} dt_pedido={item.dt_pedido} vl_total={item.vl_total} logotipo={item.logotipo}/>
        }}

        contentContainerStyle={{
            paddingBottom: 20,
            flexGrow: 1,
            gap: 8
        }}

        ListEmptyComponent={() => {
            return(
                <>
                    <Image style={{objectFit: "contain", height: 150, width: 150}} source={require("../../assets/empty.png")}/>
                    <Text style={styles.noFavoritesFoundTextStyle}>Nenhum favorito encontrado</Text>
                </>
            );
        }}
        
        />
    </View>
  );
}

const styles = StyleSheet.create({
    favoriteRestaurantsViewStyle: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 12,
    },
    noFavoritesFoundTextStyle: {
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
    }
});