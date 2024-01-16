import { Box, FlatList, Text } from "@gluestack-ui/themed"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Recommend from "./Recommend";
import { OnFetchProductsService } from "../service/ProductsService";
import Card from "./Card";

const CardsList = ({ products }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(OnFetchProductsService());
    }, []);

    return <FlatList
        data={products}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Card offerProduct={item.product}/>}
    />
}
export default CardsList;
