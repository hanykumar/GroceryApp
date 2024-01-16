import { HStack, Icon, Pressable, Text, VStack } from "@gluestack-ui/themed";
import CustomText from "./CustomText";
import { Image } from "@gluestack-ui/themed";
import { addToCartAction } from "../store/ProductSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Card = ({ offerProduct }) => {
    const navigation = useNavigation()

    const viewProfuctDetails = () => {
        navigation.navigate('ProductDetailScreen', {
            id: offerProduct.id
        })
    }

    return <Pressable onPress={viewProfuctDetails} borderRadius="$3xl" p="$5" bg='$yellow500' mr="$3">
        <HStack justifyContent="space-between" alignItems="center">
            <Image rounded='$lg' objectFit="cover" source={{ uri: offerProduct.thumbnail }}
                alt={offerProduct.title} size="md" />
            <VStack px="$3">
                <CustomText fontWeight="medium" size="xl" color="white">Get</CustomText>
                <CustomText fontWeight="bold" size="3xl" color="white">{offerProduct.discountPercentage}% OFF</CustomText>
                <CustomText fontWeight="medium" color="white">On first 3 order</CustomText>
            </VStack>
        </HStack>
    </Pressable>
}
export default Card;