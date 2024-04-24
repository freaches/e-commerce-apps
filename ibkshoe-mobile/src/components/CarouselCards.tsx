import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";

export const CarouselCards = () => {
  const list = [
    {
      id: 1,
      title: "converse1",
      image: require("../../assets/carousel/1.jpg"),
    },
    {
      id: 2,
      title: "converse2",
      image: require("../../assets/carousel/2.jpg"),
    },
    {
      id: 3,
      title: "converse3",
      image: require("../../assets/carousel/3.jpg"),
    },
    {
      id: 4,
      title: "converse4",
      image: require("../../assets/carousel/4.jpg"),
    },
    {
      id: 5,
      title: "converse4",
      image: require("../../assets/carousel/6.jpg"),
    },
  ];

  const renderItem = (
    { item }: { item: { id: number; title: string; image: any } },
    _: { index: number; dataIndex: number }
  ) => {
    return (
      <View style={styles.carouselItem}>
        <Image style={styles.image} source={item.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={list}
        autoplay={true} 
        loop={true}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width * 0.98}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  carouselItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
