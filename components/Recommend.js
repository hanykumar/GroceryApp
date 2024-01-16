import { Button, ButtonIcon, HStack, Icon, Image, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { ImageIcon, PlusIcon } from "lucide-react-native";
import { useDispatch } from "react-redux";
import { OnFetchProductDetailsService } from "../service/ProductsService";
import { addToCartAction } from "../store/ProductSlice";


const a = {
    "brand": "Fair & Clear",
    "category": "skincare",
    "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    "discountPercentage": 16.99,
    "id": 20,
    "images": [
        "https://cdn.dummyjson.com/product-images/20/1.jpg",
        "https://cdn.dummyjson.com/product-images/20/2.jpg",
        "https://cdn.dummyjson.com/product-images/20/3.jpg",
        "https://cdn.dummyjson.com/product-images/20/4.jpg",
        "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg"
    ],
    "price": 70,
    "rating": 4.06,
    "stock": 140,
    "thumbnail": "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
    "title": "Freckle Treatment Cream- 15gm"
}

const Recommend = ({ product }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch() 
    const viewProfuctDetails = (id) => {
        navigation.navigate('ProductDetailScreen', {
            id: id
        })
    }
    const addItemToCart = () => {
            dispatch(addToCartAction({product, qauanty: 1, operation: 'add'}))
    }

    if (product !== undefined)
        return <Pressable onPress={() => viewProfuctDetails(product.id)} borderRadius="$3xl" mx="$2" bg='$coolGray100' w="$48">
            <Image width='$full' objectFit="cover" source={{ uri: product.thumbnail }} alt={product.title} size="xl" rounded="$lg" />
            <HStack px="$5" mt="$2" justifyContent="space-between">
                <VStack>
                    <Text>{product.price}</Text>
                    <Text>{product.brand}</Text>
                </VStack>
                <Button w="$0" rounded='$full' size="sm" onPress={addItemToCart}>
                    <ButtonIcon size="xs" as={PlusIcon}></ButtonIcon>
                </Button>
            </HStack>
        </Pressable>
}
export default Recommend;