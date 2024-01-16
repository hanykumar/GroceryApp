import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigator from "./TabNavigator";


const Stack = createStackNavigator();

const Navigator = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="TabNavigator">
            <Stack.Screen
                name="TabNavigator"
                options={{ headerShown: false }}
                component={TabNavigator}
            />
        </Stack.Navigator>
    </NavigationContainer>;
};


export default Navigator;