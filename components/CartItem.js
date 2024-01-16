import { Button, ButtonGroup, ButtonIcon, ButtonText, HStack, Image, SelectItemText, Text, VStack } from "@gluestack-ui/themed"
import { MinusIcon, PlusIcon } from "lucide-react-native"
import { useDispatch } from "react-redux"
import { addToCartAction } from "../store/ProductSlice";

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const removeItem = () => {
        dispatch(addToCartAction({product: cartItem, quantity: 1, operation: 'remove'}))
    }
    const addItem = () => {
        dispatch(addToCartAction({product: cartItem, quantity: 1, operation: 'add'}))
    }
    return (
        <HStack alignItems="center" m="$2">
            <Image objectFit="cover" source={{ uri: cartItem.thumbnail }} alt={cartItem.title}
                size="sm"
                rounded="$lg" />
            <HStack flexGrow={1}>
                <VStack>
                <Text mx="$3">{cartItem.title}</Text>
                <Text mx="$3">${cartItem.price}</Text>
                </VStack>
            </HStack>
            <HStack >
                <ButtonGroup alignItems="center">
                    <Button width="$0" bg="$coolGray200" rounded="$full"  onPress={removeItem}>
                        <ButtonIcon color="$coolGray900" as={MinusIcon}></ButtonIcon>
                    </Button>
                    <Text px="$3">{cartItem.quantity}</Text>
                    <Button width="$0" bg="$coolGray200" rounded="$full"  onPress={addItem}>
                        <ButtonIcon color="$coolGray900" as={PlusIcon}></ButtonIcon>
                    </Button>
                </ButtonGroup>
            </HStack>


        </HStack>
    )
}
export default CartItem