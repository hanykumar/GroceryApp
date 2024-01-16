import React, { useLayoutEffect } from 'react';
import { View, SectionList, FlatList } from "@gluestack-ui/themed";
import CustomText from "../components/CustomText";
import Header from "../components/Header";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import ProductItem from "../components/ProductItem";
import Recommend from '../components/Recommend';

const Home = () => {
  const products = useSelector((state) => state.productsReducer.products);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    StatusBar.setBackgroundColor("#1d4ed8");
    StatusBar.setBarStyle('light-content');
  }, [navigation]);

  const sections = [
    {
      title: "Header Section",
      data: [
        { type: 'Card', key: 'card' },
        { type: 'CustomText', key: 'customText', text: "Recommended" }
      ]
    },
    {
      title: "Recommended Products",
      data: products
        .filter((item) => item.rating >= 4.7)
        .map((product) => ({
          type: 'RecommendItem', // Use a specific type for Recommend items
          key: product.id.toString(),
          product: product,
        })),
    },
    {
      title: "Other Recommendations",
      data: products.map((product) => ({
        type: 'ProductItem',
        key: product.id.toString(),
        product: product,
      })),
    },
  ];
  
  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'Card':
        return <Card key={item.key} />;
      case 'CustomText':
        return <CustomText key={item.key} mx="$3" py="$2" fontSize="$2xl" color="black">{item.text}</CustomText>;
      case 'ProductItem':
        return <ProductItem key={item.key} product={item.product} />;
      case 'RecommendItem':
        return <Recommend key={item.key} product={item.product} />;
      default:
        return null;
    }
  };
  
  

  const renderSectionHeader = ({ section }) => (
    <CustomText py="$2" fontSize="$2xl" color="black">{section.title}</CustomText>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

export default Home;
