import { HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { ImageIcon } from "lucide-react-native";
import CustomText from "./CustomText";

const Card = () => {
    return <VStack borderRadius="$3xl" p="$5" bg='$orange300'>
        <HStack justifyContent="space-between" alignItems="center">
            <Icon as={ImageIcon} size="xl"/>
            <VStack>
                <CustomText fontWeight="medium" size="xl" color="white">Get</CustomText>
                <CustomText fontWeight="bold" size="3xl" color="white">50% OFF</CustomText>
                <CustomText fontWeight="medium"  color="white">On first 3 order</CustomText>
            </VStack>
        </HStack>
    </VStack>
}      
export default Card;