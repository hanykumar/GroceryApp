import Header from "../components/Header"
import Card from "../components/Card"
import { VStack, Text, View, HStack, ScrollView } from "@gluestack-ui/themed"
import Recommend from "../components/Recommend"
import { useEffect } from "react"
import RecommendList from "../components/RecommentList"
import { useSelector } from "react-redux"

const Home = () => {
    const products = useSelector((state) => state.productsReducer.products)

    return <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header/>
        <ScrollView >
        <VStack m="$3">
            <Card/>
        </VStack>

        <VStack >
            <Text mx="$3" py="$2" fontSize="$2xl" color="black">Recommended</Text>
            <RecommendList products={products}/>
        </VStack>
        <VStack m="$3">
            <Text py="$2" fontSize="$2xl" color="black">Recommended</Text>
            <Recommend/>
        </VStack>
        </ScrollView>
    </View>
}
export default Home