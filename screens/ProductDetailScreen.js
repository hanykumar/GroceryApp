import { Button, ButtonGroup, ButtonIcon, ButtonText, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { View, Box, Image } from "@gluestack-ui/themed";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OnFetchProductDetailsService } from "../service/ProductsService";
import { BaggageClaimIcon, HeartIcon } from "lucide-react-native";
import { addToCartAction } from "../store/ProductSlice";
import { useNavigation } from "@react-navigation/native";

const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const currentProduct = useSelector((state) => state.productsReducer.currentProduct);
  const dispatch = useDispatch()
  useEffect(() => {
    if (route?.params?.id)
      dispatch(OnFetchProductDetailsService(route.params.id))
  }, [route])

  const addToCart = () => {
    dispatch(addToCartAction({product: currentProduct, qauanty: 1, operation: 'add'})) //{ product, quantity, operation }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HStack mr="$3">
          <Button borderRadius='$xl' size='lg' bg='#00000011' $active-bg='#00000022'
            onPress={() => navigation.navigate('ShoppingCartScreen')}>
            <ButtonIcon as={BaggageClaimIcon} color="$coolGray700" />
          </Button>

        </HStack>
      ),
    })
  }, [])

  if (currentProduct !== undefined)
    return <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Box p="$3">
        <Text mt="$5" size='4xl'>{currentProduct?.title}</Text>
        <Text size='4xl'>{currentProduct?.category}</Text>
        <Text>{currentProduct?.rating}</Text>

      </Box>

      {
        currentProduct.images?.length &&
        <View position="relative">
          <Image width='$full' height={300} source={{ uri: currentProduct?.images[0] }} alt={currentProduct.title}
            objectFit="contain"
            size="xl" rounded="$lg" />
          <Button bg="transparent" position="absolute" top={0} right={3}>
            <ButtonIcon color="$red500" as={HeartIcon}></ButtonIcon>
          </Button>
        </View>
      }
      <Box p="$3">
        <Text>${currentProduct.price}/KG</Text>
      </Box>
      <HStack>
        <ButtonGroup space="lg">
          <Button onPress={addToCart} rounded='$2xl' size="xl" bg="tranparent" borderWidth={1} >
            <ButtonText color="$blue500">Add to Cart</ButtonText>
          </Button>
          <Button rounded='$2xl' size="xl">
            <ButtonText>Buy Now</ButtonText>
          </Button>
        </ButtonGroup>
      </HStack>
      <Box p="$3">
        <Text>{currentProduct.description}</Text>
      </Box>

    </ScrollView>
}
export default ProductDetailScreen;