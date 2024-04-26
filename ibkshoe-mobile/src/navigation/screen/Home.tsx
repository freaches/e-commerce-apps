import React from "react";
import { ScrollView, Image, Text, View } from "react-native";
import { CarouselCards } from "../../components/CarouselCards";
import { Footer } from "../../components/Footer";

export const Home = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../../assets/logo-ibk-shop.png")}
          style={{ width: 150, height: 150 }}
        />
        <View>
          <CarouselCards />
        </View>
        <Text style={{color: "#001E62", fontWeight: "bold", fontSize: 35, marginTop: 20}}>SHOP NEW COLLECTION</Text>
        <View style={{ margin: 10, width: 370, height: 250, alignContent: "center", alignItems: "center" }}>
          <Image source={require("../../../assets/carousel/6.jpg")} style={{ width: "100%", height: "100%" }}/>
        </View>
        <View style={{ margin: 10, width: 370, height: 250, alignContent: "center", alignItems: "center" }}>
          <Image source={require("../../../assets/carousel/7.jpeg")} style={{ width: "100%", height: "100%" }}/>
        </View>
        <View style={{ margin: 10, width: 370, height: 250, alignContent: "center", alignItems: "center" }}>
          <Image source={require("../../../assets/carousel/8.webp")} style={{ width: "100%", height: "100%" }}/>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
};
