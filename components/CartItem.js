import { Box, Button, ButtonGroup, ButtonIcon, HStack, Image, VStack } from "@gluestack-ui/themed"
import { MinusIcon, PlusIcon } from "lucide-react-native"
import { useDispatch } from "react-redux"
import { addToCartAction } from "../store/ProductSlice";
import CustomText from "./CustomText";

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const removeItem = () => {
        dispatch(addToCartAction({ product: cartItem, quantity: 1, operation: 'remove' }))
    }
    const addItem = () => {
        dispatch(addToCartAction({ product: cartItem, quantity: 1, operation: 'add' }))
    }
    return (
        <HStack alignItems="center" p="$2" w="$full" justifyContent="space-between">
            <HStack >
                <Image objectFit="cover" source={{ uri: cartItem.thumbnail }} alt={cartItem.title}
                    size="xs"
                    rounded="$lg" />
                <Box px="$3">
                    <CustomText fontWeight='medium' elipsizeMode="tail" numberOfLines={2}>{cartItem.title}</CustomText>
                    <CustomText >${cartItem.price}</CustomText>
                </Box>
            </HStack>
            <HStack  justifyContent="flex-end" >
                <ButtonGroup alignItems="center">
                    <Button $active-bg="#00000044" size="sm" height="$8" width="$0" bg="$coolGray200" rounded="$full" onPress={removeItem}>
                        <ButtonIcon color="$coolGray900" as={MinusIcon}></ButtonIcon>
                    </Button>
                    <CustomText w="$5" textAlign="center">{cartItem.quantity}</CustomText>
                    <Button $active-bg="#00000044" size="sm" height="$8" width="$0" bg="$coolGray200" rounded="$full" onPress={addItem}>
                        <ButtonIcon color="$coolGray900" as={PlusIcon}></ButtonIcon>
                    </Button>
                </ButtonGroup>
            </HStack>
        </HStack>
    )
}
export default CartItem