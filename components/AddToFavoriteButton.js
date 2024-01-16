import { ButtonIcon } from "@gluestack-ui/themed"
import { Button } from "@gluestack-ui/themed"
import { HeartIcon } from "lucide-react-native"
import { useDispatch, useSelector } from "react-redux"
import { addToFavorite } from "../store/ProductSlice"

const AddToFavoriteButton = ({ product }) => {

  const dipatch = useDispatch();
  const favorites = useSelector(state => state.productsReducer.favorites);
  const isFavorite = favorites?.some(item => item.id === product.id);


  const addToFavhandler = () => {
    dipatch(addToFavorite(product))
  }
  return <Button onPress={addToFavhandler} rounded="$lg" bg="#ffffff66" $active-bg="#00000022">
    <ButtonIcon color={isFavorite ? 'red' : '$coolGray600'} fill={isFavorite ? 'red' : 'transparent'} as={HeartIcon}></ButtonIcon>
  </Button>
}
export default AddToFavoriteButton;