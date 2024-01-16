import { HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { ImageIcon } from "lucide-react-native";

const Card = () => {
    return <VStack borderRadius="$3xl" p="$10" bg='$orange300'>
        <HStack justifyContent="space-between" alignItems="center">
            <Icon as={ImageIcon} size="xl"/>
            <VStack>
                <Text>Get</Text>
                <Text>50% OFF</Text>
                <Text>On first 3 order</Text>
            </VStack>
        </HStack>
    </VStack>
}      
export default Card;