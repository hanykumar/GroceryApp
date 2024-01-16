import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/HomeScreen";
import { View, Icon, MenuIcon, Text, Center, Box, Button } from "@gluestack-ui/themed";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { HeartIcon, HomeIcon, LayoutGridIcon, MoreVerticalIcon } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
    const tabBarStyle = {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 80, elevation: 0, backgroundColor: '#f0f3fc'
    };


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: tabBarStyle,
                tabBarShowLabel: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused, }) => (
                        <View px={focused ? '$7' : '$0'} py={focused ? '$7' : '$2'}
                            style={{
                                position: 'absolute',
                                bottom: focused ? 25 : 7,
                                backgroundColor: focused ? 'black' : '#f0f3fc',
                                borderRadius: 50,
                                borderWidth: 5,
                                borderColor: focused ? 'white' : 'transparent',
                                zIndex: focused ? 2 : 1,
                                elevation: focused ? 0 : 0,
                                margin: focused ? 25 : 0,
                            }}
                        >
                            <Center>
                                <Icon
                                    as={HomeIcon}
                                    size='md' fill={focused ? "$orange500": 'transparent'}
                                    color={focused ? '$orange500' : color}
                                />
                                {focused ? null : <Text fontSize='$sm'>Home</Text>}
                            </Center>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Categories"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View px={focused ? '$7' : '$0'} py={focused ? '$7' : '$2'}
                            style={{
                                position: 'absolute',
                                bottom: focused ? 25 : 7,
                                backgroundColor: focused ? 'black' : '#f0f3fc',
                                borderRadius: 50,
                                borderWidth: 5,
                                borderColor: focused ? 'white' : 'transparent',
                                zIndex: focused ? 2 : 1,
                                elevation: focused ? 0 : 0,
                                margin: focused ? 25 : 0,
                            }}
                        >
                            <Center>
                                <Icon
                                    as={LayoutGridIcon}
                                    size='md' fill={focused ? "$orange500": 'transparent'}
                                    color={focused ? '$orange500' : color}
                                />
                                {focused ? null : <Text fontSize='$sm'>Categories</Text>}
                            </Center>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View px={focused ? '$7' : '$0'} py={focused ? '$7' : '$2'}
                            style={{
                                position: 'absolute',
                                bottom: focused ? 25 : 7,
                                backgroundColor: focused ? 'black' : '#f0f3fc',
                                borderRadius: 50,
                                borderWidth: 5,
                                borderColor: focused ? 'white' : 'transparent',
                                zIndex: focused ? 2 : 1,
                                elevation: focused ? 0 : 0,
                                margin: focused ? 25 : 0,
                            }}
                        >
                            <Center>
                                <Icon
                                    as={HeartIcon}
                                    size='md' fill={focused ? "$orange500": 'transparent'}
                                    color={focused ? '$orange500' : color}
                                />
                                {focused ? null : <Text fontSize='$sm'>Favorites</Text>}
                            </Center>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Options"
                component={Home}
                options={{
                    tabBarIcon: ({ color='$orange400', size, focused }) => (
                        <View  px={focused ? '$7' : '$0'} py={focused ? '$7' : '$2'}
                            style={{
                                position: 'absolute',
                                bottom: focused ? 25 : 7,
                                backgroundColor: focused ? 'black' : '#f0f3fc',
                                borderRadius: 50,
                                borderWidth: 5,
                                borderColor: focused ? 'white' : 'transparent',
                                zIndex: focused ? 2 : 1,
                                elevation: focused ? 0 : 0,
                                margin: focused ? 25 : 0,
                            }}
                        >
                            <Center>
                                <Icon
                                    as={MoreVerticalIcon}
                                    size='md' fill={focused ? "$orange500": 'transparent'}
                                    color={focused ? '$orange500' : color}
                                />
                                {focused ? null : <Text fontSize='$sm'>More</Text>}
                            </Center>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
