import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "./theme";
import { Home } from "./screens/home";
import { Favoritos } from "./screens/favoritos";
import { Pedidos } from "./screens/pedidos";
import { Perfil } from "./screens/perfil";

Tab = createBottomTabNavigator();

export function RoutesAuth() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>

                <Tab.Screen name='home' component={Home} options={{headerShown: false}}/>

                <Tab.Screen name='favoritos' component={Favoritos} options={{
                    title: "Favoritos",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerStyle: {backgroundColor: COLORS.white},
                }}/>

                <Tab.Screen name='pedidos' component={Pedidos} options={{
                    title: "Pedidos",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerStyle: {backgroundColor: COLORS.white},
                }}/>

                <Tab.Screen name='perfil' component={Perfil} options={{
                    title: "Perfil",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerStyle: {backgroundColor: COLORS.white},
                }}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}