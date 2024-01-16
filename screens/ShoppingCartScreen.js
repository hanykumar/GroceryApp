import { Button, ButtonGroup, ButtonIcon, ButtonText, FlatList, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { View, Box, Image } from "@gluestack-ui/themed";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeartIcon } from "lucide-react-native";
import CartItem from "../components/CartItem";
import { VStack } from "@gluestack-ui/themed";

const ShoppingCartScreen = () => {
    const cart = useSelector((state) => state.productsReducer.cart);
    //   const dispatch = useDispatch()
    //   useEffect(() => {
    //     if (route?.params?.id)
    //       dispatch(OnFetchProductDetailsService(route.params.id))
    //   }, [route])

    return <View flex={1}>

        <FlatList data={cart}
            renderItem={({ item, index }) => <CartItem key={index} cartItem={item} />}
        />

        <VStack bg="$coolGray200" px="$7" py="$3" m="$3" rounded="$xl">
            <HStack justifyContent="space-between">
                <Text>Subtotal: </Text>
                <Text>$1 </Text>
            </HStack>
            <HStack justifyContent="space-between">
                <Text>Subtotal: </Text>
                <Text>$33: </Text>
            </HStack>
            <HStack justifyContent="space-between">
                <Text>Subtotal: </Text>
                <Text>$32 </Text>
            </HStack>
            <Button rounded='$full' size="xl" height='$16' my="$4" mt="$5">
                <ButtonText>
                    Proceed To Checkout
                </ButtonText>
            </Button>
        </VStack>

    </View>
}
export default ShoppingCartScreen;