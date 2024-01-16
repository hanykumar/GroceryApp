import { HStack, VStack, Text, Input, InputField, InputSlot, Icon, InputIcon, Button, ButtonIcon, ButtonText } from "@gluestack-ui/themed"
import { BellIcon, ChevronDownIcon, SearchIcon } from "lucide-react-native";

const Header = () => {
    return <VStack p="$5" bg='$blue600' >
        <HStack py="$5" justifyContent="space-between" alignItems="center">
            <Text color="white" size="3xl">Hey, Hany Kumar</Text>
            <Button w="$0" bg="transparent"><ButtonIcon as={BellIcon}></ButtonIcon></Button>
        </HStack>
        <HStack py="$5">
            <Input  height="$16" width="$full" rounded='$full' borderWidth="$0" bg="#00000033">
                <InputSlot>
                    <InputIcon size="xl" ml="$6" as={SearchIcon} color="#ffffffaa"/>
                </InputSlot>
                <InputField size="xl" placeholderTextColor='#ffffffaa' color="#ffffffaa" placeholder="Search">
                </InputField>
            </Input>
        </HStack>
        <HStack pt="$3" justifyContent="space-between">
            <VStack>
                <Text color="#ffffff88">DELIVER TO</Text>
                <Button bg="transparent" w="$36" px="$0" >
                    <ButtonText color="#ffffff99" >Kasavanahalli, Bengaluru</ButtonText>
                    <ButtonIcon color="#ffffff99" as={ChevronDownIcon} ml="$2"></ButtonIcon>
                </Button>
            </VStack>
            <VStack>
                <Text color="#ffffff88">WITHIN</Text>
                <Button bg="transparent" w="$36" px="$0" >
                    <ButtonText color="#ffffff99" >1 Hour</ButtonText>
                    <ButtonIcon color="#ffffff99" as={ChevronDownIcon} ml="$2"></ButtonIcon>
                </Button>
            </VStack>
        </HStack>
    </VStack>
}
export default Header;