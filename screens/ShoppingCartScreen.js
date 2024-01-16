import { Button, ButtonGroup, ButtonIcon, ButtonText, Center, FlatList, HStack, ScrollView } from "@gluestack-ui/themed";
import { View, Box, Image } from "@gluestack-ui/themed";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeftIcon, HeartIcon } from "lucide-react-native";
import CartItem from "../components/CartItem";
import { VStack } from "@gluestack-ui/themed";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import CustomButtonText from "../components/CustomButtonText";

const ShoppingCartScreen = () => {
    const cart = useSelector((state) => state.productsReducer.cart);
    const navigation = useNavigation()

    useLayoutEffect(() => {
        StatusBar.setBackgroundColor("white");
        StatusBar.setBarStyle('dark-content')
        navigation.setOptions({
            headerLeft: () => (
                <Button $active-bg="#00000044" bg="$coolGray200" w="$0" mx="$3"
                    onPress={() => navigation.goBack()} rounded='$full'>
                    <ButtonIcon color="black" as={ChevronLeftIcon}></ButtonIcon>
                </Button>
            ),
            headerTitle: `Shopping Cart (${cart.length})`
        })
    }, [cart])

    if(cart.length == 0){
        return <Center flex={1} bg='white' >
            <CustomText>Add products to Cart!</CustomText>
        </Center>
    }

    return <View flex={1} bg='white' >
        <VStack flex={1} m="$3" justifyContent="space-between">
            <FlatList data={cart}
                renderItem={({ item, index }) => <CartItem key={index} cartItem={item} />}
            />

            <Box justifyContent="flex-end" bg="$coolGray200" px="$7" py="$3"  rounded="$xl">
                <HStack justifyContent="space-between">
                    <CustomText>Subtotal: </CustomText>
                    <CustomText>$1 </CustomText>
                </HStack>
                <HStack justifyContent="space-between">
                    <CustomText>Subtotal: </CustomText>
                    <CustomText>$33: </CustomText>
                </HStack>
                <HStack justifyContent="space-between">
                    <CustomText>Subtotal: </CustomText>
                    <CustomText>$32 </CustomText>
                </HStack>
                <Button bg="$blue700" rounded='$3xl' size="xl" height='$16' my="$4" mt="$5">
                    <CustomButtonText>
                        Proceed To Checkout
                    </CustomButtonText>
                </Button>
            </Box>
        </VStack>
    </View>
}
export default ShoppingCartScreen;