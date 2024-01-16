import { BadgeText, Button, ButtonGroup, ButtonIcon, ButtonText, HStack, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { View, Box, Image } from "@gluestack-ui/themed";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OnFetchProductDetailsService } from "../service/ProductsService";
import { BaggageClaimIcon, ChevronLeftIcon, HeartIcon } from "lucide-react-native";
import { addToCartAction } from "../store/ProductSlice";
import { useNavigation } from "@react-navigation/native";
import StarRating from "../components/StarRating";
import ImageSlider from "../components/ImagesSlider";
import { Badge } from "@gluestack-ui/themed";

const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const currentProduct = useSelector((state) => state.productsReducer.currentProduct);
  const dispatch = useDispatch()
  useEffect(() => {
    if (route?.params?.id)
      dispatch(OnFetchProductDetailsService(route.params.id))
  }, [route])

  const addToCart = () => {
    dispatch(addToCartAction({ product: currentProduct, quantity: 1, operation: 'add' })) //{ product, quantity, operation }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button bg="$coolGray200" w="$0" mx="$3"
          onPress={() => navigation.goBack()} rounded='$full'>
          <ButtonIcon color="black" as={ChevronLeftIcon}></ButtonIcon>
        </Button>
      ),
      headerRight: () => (
        <HStack mr="$3">
          <Button borderRadius='$full' size='lg' bg='transparent' $active-bg='#00000022'
            onPress={() => navigation.navigate('ShoppingCartScreen')}>
            <ButtonIcon as={BaggageClaimIcon} color="$coolGray700" />
          </Button>

        </HStack>
      ),
    })
  }, [])

  if (currentProduct !== undefined)
    return <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
      <VStack p="$3">
        <Text mt="$5" size='4xl'>{currentProduct?.title}</Text>
        <Text size='4xl'>{currentProduct?.category}</Text>

        <StarRating rating={currentProduct?.rating} />
      </VStack>

      {
        currentProduct.images?.length &&
        <View position="relative" height={300}>
          {/* <Image width='$full' height={300} source={{ uri: currentProduct?.images[0] }} alt={currentProduct.title}
            objectFit="contain"
            size="xl" rounded="$lg" /> */}
          <ImageSlider images={currentProduct?.images} />
          <Button rounded="$lg" bg="#ffffff66" $active-bg="#00000022" position="absolute" top="$2" right="$2">
            <ButtonIcon color="$coolGray600" as={HeartIcon}></ButtonIcon>
          </Button>
        </View>
      }
      <HStack alignItems="center" px="$3" my="$5">
        <Text color="$blue700">${currentProduct.price}/KG</Text>
        <Box size="sm" mx="$2" px="$2" borderRadius="$xl" bg="$blue700">
          <Text fontSize='$xs' color="white">$22.04 OFF</Text>
        </Box>
      </HStack>
      <HStack justifyContent="center">
        <ButtonGroup space="lg" flexGrow={1} px="$3">
          <Button flexGrow={1} height='$16' onPress={addToCart} rounded='$2xl' size="xl" borderColor="$blue700" bg="tranparent" borderWidth={1} >
            <ButtonText color="$blue700">Add to Cart</ButtonText>
          </Button>
          <Button flexGrow={1} height='$16' rounded='$2xl' size="xl" bg="$blue700">
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