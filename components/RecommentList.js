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
        data={products.filter(item => item !== undefined)}
        horizontal
        renderItem={({ item, index }) => <Recommend key={index} product={item} />}
    />
}
export default RecommendList;
