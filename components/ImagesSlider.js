import React from 'react';
import {  StyleSheet } from 'react-native';
import {View, Image } from "@gluestack-ui/themed"
import Swiper from 'react-native-swiper';

const ImageSlider = ({images}) => {

  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image style={styles.image} source={{ uri: image }} alt={image}
            objectFit="contain"
            />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageSlider;
