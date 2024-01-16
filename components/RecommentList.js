import { Box, FlatList } from "@gluestack-ui/themed"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Recommend from "./Recommend";
import { OnFetchProductsService } from "../service/ProductsService";

const RecommendList = ({ products }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(OnFetchProductsService());
    }, []);

    return <FlatList
        data={products}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Recommend product={item.product} />}
    />
}
export default RecommendList;
