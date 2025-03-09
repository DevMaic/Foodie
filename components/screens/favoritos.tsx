import { FlatList, StyleSheet, Image, View, Text, FlatListComponent } from "react-native";
import { restaurantes } from "../../assets/dados";
import { Restaurante } from "../restaurante";
import { COLORS, FONT_SIZE } from "../theme";
import { vazio } from "../../assets/vazio";
import React from "react";

export function Favoritos() {
  return (
    <View style={styles.favoriteRestaurantsViewStyle}>
        <FlatList data={restaurantes} keyExtractor={(restaurante) => restaurante.id.toString()} showsVerticalScrollIndicator={false}
        renderItem={(restaurante) => {
            return <Restaurante logotipo={restaurante.item.logotipo} nome={restaurante.item.nome} endereco={restaurante.item.endereco   } icone={require("../../assets/delete.png")}/>
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