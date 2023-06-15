import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import HomePage from "./src/pages/home-page";
import DetailPage from "./src/pages/detail-page";


const Stack = createNativeStackNavigator();

export default function App(){
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomePage}/>
                <Stack.Screen name="details" component={DetailPage}/>
            </Stack.Navigator>   
        </NavigationContainer>

    )
}