import { ChevronLeftIcon, View } from "@gluestack-ui/themed"
import { useEffect, useLayoutEffect } from "react";
import { FlatList, StatusBar } from "react-native";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
import { Button } from "@gluestack-ui/themed";
import { ButtonIcon } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import { Center } from "@gluestack-ui/themed";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import { ShoppingCartIcon } from "lucide-react-native";

const FavoritesScreen  =() => {
    const navigation= useNavigation()
    const favorites =  useSelector((state) => state.productsReducer.favorites);
    const cart = useSelector((state) => state.productsReducer.cart);

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
          headerRight: () => (
            <HStack mr="$3" >
              <Button position="relative" borderRadius='$full' size='lg' bg='transparent' $active-bg='#00000044'
                onPress={() => navigation.navigate('ShoppingCartScreen')}>
                <ButtonIcon as={ShoppingCartIcon} color="$coolGray700" />
                {cart.length > 0 &&
                  <Center position="absolute" width='$6' height='$6'
                    top="$0" right="$0" bg="$orange200"
                    borderRadius='$full'
                  >
                    <CustomText size="xs">{cart.length}</CustomText>
                  </Center>
                }
              </Button>
    
            </HStack>
          ),
        })
      }, [cart])

      if(favorites.length == 0){
        return <Center flex={1} bg='white' >
            <CustomText>Add products to Favorite!</CustomText>
        </Center>
    }



    return (
        <View flex={1} bg="white">
            <FlatList data={favorites} renderItem={
                ({index, item}) => <ProductItem key={index} product={item}/>
            }/>
        </View>
    )
}
export default FavoritesScreen;