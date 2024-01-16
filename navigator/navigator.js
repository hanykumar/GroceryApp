import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from "./TabNavigator";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";


const Stack = createStackNavigator();

const Navigator = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="TabNavigator">
            <Stack.Screen
                name="TabNavigator"
                options={{ headerShown: false }}
                component={TabNavigator}
            />
            <Stack.Screen
                name="ProductDetailScreen"
                options={{
                    headerShown: true, headerBackgroundContainerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTitle: '',
                    // headerLeft: (props) => <CustomBackButton {...props} />,
                }}
                component={ProductDetailScreen}
            />
            <Stack.Screen
                name="ShoppingCartScreen"
                options={{ headerShown: true }}
                component={ShoppingCartScreen}
            />

        </Stack.Navigator>

    </NavigationContainer>;
};


export default Navigator;