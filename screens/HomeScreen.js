import React, { useLayoutEffect, useMemo } from 'react';
import { View, SectionList, FlatList, Center, Text } from "@gluestack-ui/themed";
import CustomText from "../components/CustomText";
import Header from "../components/Header";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import ProductItem from "../components/ProductItem";
import Recommend from '../components/Recommend';
import RecommendList from '../components/RecommentList';
import { calculateDiscount } from '../service/ProductsService';
import CardsList from '../components/CardsList';

const Home = React.memo(() => {
    const products = useSelector((state) => state.productsReducer.products);
    const loading = useSelector((state) => state.productsReducer.loading);
    const navigation = useNavigation();

    useFocusEffect(() => {
        StatusBar.setBackgroundColor("#1d4ed8");
        StatusBar.setBarStyle('light-content');
    });

    const sections = useMemo(() => [
        {
            title: "Deal & Offers",
            data: [
                {
                    type: 'Card', key: 'card',
                    data: [...products].sort((a, b) => b.discountPercentage - a.discountPercentage).slice(0, 3)
                        .map((product) => ({
                            key: product.id.toString(),
                            product: product
                        })),
                }
            ]
        },
        {
            title: "Recommended",
            data: [
                {
                    type: 'RecommendItem',
                    key: 'recommendedFlatList',
                    data: products.filter((item) => item.rating >= 4.7).map((product) => ({
                        key: product.id.toString(),
                        product: product,
                    })),
                }
            ]
        },
        {
            title: "Proucts",
            data: products.map((product) => ({
                type: 'ProductItem',
                key: product.id.toString(),
                product: product,
            })),
        },
    ]);



    const renderItem = ({ item }) => {
        switch (item.type) {
            case 'Card':
                return <CardsList key={item.key}  products={item.data}/>;
            case 'RecommendItem':
                return <RecommendList key={item.key} products={item.data} />;
            case 'ProductItem':
                return <ProductItem key={item.key} product={item.product} />;
            default:
                return null;
        }
    };


    const renderSectionHeader = ({ section }) => (
        <CustomText mt="$4" py="$2" fontSize="$xl" color="black">{section.title}</CustomText>
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <View mx="$3">
                {
                    loading && <Center p="$4"><Text>Loading...</Text></Center>
                }
                <SectionList
                    sections={sections}
                    keyExtractor={(item) => item.key}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    ListFooterComponent={() =><View h="$96"></View>}
                />
            </View>
        </View>
    );
});

export default Home;
