import { HStack, VStack, Text, Input, InputField, InputSlot, Icon, InputIcon } from "@gluestack-ui/themed"
import { SearchIcon } from "lucide-react-native";

const Header = () => {
    return <VStack p="$5" bg='$blue600' >
        <HStack py="$5" justifyContent="space-between" alignItems="center">
            <Text color="white" size="3xl">Hi Hany Kumar</Text>
            <Text color="white">Icon</Text>
        </HStack>
        <HStack py="$5">
            <Input height="$16"  width="$full" rounded='$full' borderWidth="$0" bg="#00000033">
                <InputSlot>
                    <InputIcon size="xl" ml="$6" as={SearchIcon} />
                </InputSlot>
                <InputField size="xl" placeholder="Search">
                </InputField>
            </Input>
        </HStack>
        <HStack pt="$5" >
            <Text>Delivery</Text>
            <Text>Time</Text>
        </HStack>
    </VStack>
}
export default Header;