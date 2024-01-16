import { BadgeText, Button, ButtonGroup, ButtonIcon, ButtonText, Center, HStack, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { View, Box, Image } from "@gluestack-ui/themed";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OnFetchProductDetailsService } from "../service/ProductsService";
import { BaggageClaimIcon, ChevronLeftIcon, HeartIcon, ShoppingCartIcon } from "lucide-react-native";
import { addToCartAction } from "../store/ProductSlice";
import { useNavigation } from "@react-navigation/native";
import StarRating from "../components/StarRating";
import ImageSlider from "../components/ImagesSlider";
import { Badge } from "@gluestack-ui/themed";
import CustomText from "../components/CustomText";
import { StatusBar } from "react-native";
import CustomButtonText from "../components/CustomButtonText";
import AddToFavoriteButton from "../components/AddToFavoriteButton";

const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.productsReducer.cart);
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

  if (currentProduct !== undefined)
    return <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
      <VStack p="$3">
        <CustomText mt="$2" size='4xl'>{currentProduct?.title}</CustomText>
        <CustomText fontWeight='bold' size='4xl'>{currentProduct?.category}</CustomText>

        <StarRating rating={currentProduct?.rating} />
      </VStack>

      {
        currentProduct.images?.length &&
        <View position="relative" height={300}>
          <ImageSlider images={currentProduct?.images} />
          <Box position="absolute" top="$2" right="$2">
            <AddToFavoriteButton product={currentProduct}/>
          </Box>
        </View>
      }
      <HStack alignItems="center" px="$3" my="$5">
        <CustomText fontSize="$lg" color="$blue700"><CustomText fontSize="$lg" color="$blue700" fontWeight='bold'>${currentProduct.price}</CustomText>/KG</CustomText>
        <Box size="sm" mx="$2" px="$2" borderRadius="$xl" bg="$blue700">
          <CustomText fontSize='$xs' color="white">${currentProduct.discountPercentage} OFF</CustomText>
        </Box>
      </HStack>
      <HStack justifyContent="center">
        <ButtonGroup space="lg" flexGrow={1} px="$3">
          <Button $active-bgColor="$blue200" flexGrow={1} height='$16' onPress={addToCart} rounded='$3xl' size="xl" borderColor="$blue700" bg="tranparent" borderWidth={1} >
            <CustomButtonText color="$blue700">Add to Cart</CustomButtonText>
          </Button>
          <Button $active-bg="$blue500" flexGrow={1} height='$16' rounded='$3xl' size="xl" bg="$blue700">
            <CustomButtonText>Buy Now</CustomButtonText>
          </Button>
        </ButtonGroup>
      </HStack>
      <Box px="$3" my="$5">
        <CustomText mb="$2">Details</CustomText>
        <CustomText color="$coolGray400">{currentProduct.description}</CustomText>
      </Box>
    </ScrollView>
}
export default ProductDetailScreen;