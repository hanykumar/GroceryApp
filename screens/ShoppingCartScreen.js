import { Button, ButtonGroup, ButtonIcon, ButtonText, FlatList, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { View, Box, Image } from "@gluestack-ui/themed";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeartIcon } from "lucide-react-native";
import CartItem from "../components/CartItem";

const ShoppingCartScreen = () => {
    const cart = useSelector((state) => state.productsReducer.cart);
    //   const dispatch = useDispatch()
    //   useEffect(() => {
    //     if (route?.params?.id)
    //       dispatch(OnFetchProductDetailsService(route.params.id))
    //   }, [route])

    return <View flex={1}>

        <FlatList data={cart}
        renderItem={({item, index}) => <CartItem key={index} cartItem={item}/>}
        >

        </FlatList>
    </View>
}
export default ShoppingCartScreen;