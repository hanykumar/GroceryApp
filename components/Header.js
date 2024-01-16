import { HStack, VStack, Text, Input, InputField, InputSlot, Icon, InputIcon, Button, ButtonIcon, ButtonText } from "@gluestack-ui/themed"
import { BellIcon, ChevronDownIcon, SearchIcon, ShoppingCartIcon } from "lucide-react-native";
import CustomText from "./CustomText";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Center } from "@gluestack-ui/themed";
import { StatusBar } from "react-native";
import CustomButtonText from "./CustomButtonText";

const Header = () => {
    const cart = useSelector((state) => state.productsReducer.cart)
    const navigation = useNavigation();

    const goToCart = () => {
        navigation.navigate('ShoppingCartScreen')
    }
    return <VStack pt="$2" px="$5" bg='$blue700' >
        <HStack py="$3" justifyContent="space-between" alignItems="center">
            <CustomText color="white" fontWeight='Medium' size="2xl">Hey, Hany Kumar</CustomText>
            <Button onPress={goToCart} w="$0" bg="transparent">
            <ButtonIcon as={ShoppingCartIcon} color="white" />
            {cart.length > 0 &&
              <Center position="absolute" width='$5' height='$5'
                top="$0" right="$0" bg="$orange200"
                borderRadius='$full'
                >
                <CustomText size="xs">{cart.length}</CustomText>
              </Center>
            }
                </Button>
        </HStack>
        <HStack py="$3">
            <Input  height="$16" width="$full" rounded='$full' borderWidth="$0" bg="#00000033">
                <InputSlot>
                    <InputIcon size="xl" ml="$6" as={SearchIcon} color="#ffffffaa"/>
                </InputSlot>
                <InputField size="xl" placeholderTextColor='#ffffffaa' color="#ffffffaa" placeholder="Search">
                </InputField>
            </Input>
        </HStack>
        <HStack pt="$3" pb="$1" justifyContent="space-between">
            <VStack>
                <CustomText color="#ffffff88">DELIVER TO</CustomText>
                <Button bg="transparent" w="$36" px="$0" >
                    <CustomButtonText color="#ffffff99" >Kasavanahalli, Bengaluru</CustomButtonText>
                    <CustomButtonText color="#ffffff99" as={ChevronDownIcon} ml="$2"></CustomButtonText>
                </Button>
            </VStack>
            <VStack>
                <CustomText color="#ffffff88">WITHIN</CustomText>
                <Button bg="transparent" w="$36" px="$0" >
                    <CustomButtonText color="#ffffff99" >1 Hour</CustomButtonText>
                    <ButtonIcon color="#ffffff99" as={ChevronDownIcon} ml="$2"></ButtonIcon>
                </Button>
            </VStack>
        </HStack>
    </VStack>
}
export default Header;