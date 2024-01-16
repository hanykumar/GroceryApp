import { Button, ButtonGroup, ButtonIcon, ButtonText, HStack, Image, SelectItemText, Text } from "@gluestack-ui/themed"
import { MinusIcon, PlusIcon } from "lucide-react-native"
import { useDispatch } from "react-redux"
import { addToCartAction } from "../store/ProductSlice";

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const removeItem = () => {
        dispatch(addToCartAction({product: cartItem, qauanty: 1, operation: 'remove'}))
    }
    const addItem = () => {
        dispatch(addToCartAction({product: cartItem, qauanty: 1, operation: 'add'}))
    }
    return (
        <HStack alignItems="center" m="$2">
            <Image objectFit="cover" source={{ uri: cartItem.thumbnail }} alt={cartItem.title}
                size="sm"
                rounded="$lg" />
            <HStack flexGrow={1}>
                <Text mx="$3">{cartItem.title}</Text>
            </HStack>
            <HStack>
                <ButtonGroup>
                    <Button onPress={removeItem}>
                        <ButtonIcon as={MinusIcon}></ButtonIcon>
                    </Button>
                    <Text px="$3">{cartItem.quantity}</Text>
                    <Button onPress={addItem}>
                        <ButtonIcon as={PlusIcon}></ButtonIcon>
                    </Button>
                </ButtonGroup>
            </HStack>


        </HStack>
    )
}
export default CartItem