import { Button, ButtonGroup, ButtonIcon, ButtonText, Center, Divider, FlatList, HStack, ScrollView } from "@gluestack-ui/themed";
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
    const navigation = useNavigation();
    const deliveryCharges = 2;

    function calculateTotalPrice() {
        let totalPrice = 0;

        cart.forEach((item) => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
        });

        return totalPrice;
    }

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

    if (cart.length == 0) {
        return <Center flex={1} bg='white' >
            <CustomText>Add products to Cart!</CustomText>
        </Center>
    }

    return <View flex={1} bg='white' >
        <VStack flex={1} m="$3" justifyContent="space-between">
            <Box>
                <FlatList data={cart}
                    renderItem={({ item, index }) => <CartItem key={index} cartItem={item} />}
                />
                <HStack justifyContent="flex-end">
                    <Button  px="$2" variant="link" ><CustomButtonText color="$blue700" >Edit</CustomButtonText></Button>
                </HStack>
            </Box>

            <Box justifyContent="flex-end" bg="$coolGray100" px="$7" py="$3" rounded="$xl">
                <HStack justifyContent="space-between">
                    <CustomText color="$coolGray500">Subtotal:</CustomText>
                    <CustomText>${calculateTotalPrice()}</CustomText>
                </HStack>
                <HStack justifyContent="space-between">
                    <CustomText color="$coolGray500">Delivery: </CustomText>
                    <CustomText>${deliveryCharges} </CustomText>
                </HStack>
                <Divider my="$3" />
                <HStack justifyContent="space-between">
                    <CustomText color="$coolGray500">Total: </CustomText>
                    <CustomText fontWeight="medium" >${calculateTotalPrice() + deliveryCharges} </CustomText>
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