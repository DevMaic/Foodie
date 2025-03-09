import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./screens/login";
import { Cadastro } from "./screens/cadastro";
import { COLORS } from "./theme";
import { CadastroEndereco } from "./screens/cadastro-endereco";

const Stack = createNativeStackNavigator();

export function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
                
                <Stack.Screen name='cadastro' component={Cadastro} options={{headerShadowVisible: false, title: '', headerStyle: {backgroundColor: COLORS.white, marginBottom: -80}}}/>
                
                <Stack.Screen name='cadastro-endereco' component={CadastroEndereco} options={{headerShadowVisible: false, title: '', headerStyle: {backgroundColor: COLORS.white}}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}