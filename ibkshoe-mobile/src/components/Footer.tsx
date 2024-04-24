import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const Footer = () => {
  return (
    <View
      style={{
        backgroundColor: "#EADBC8",
        height: 800,
        margin: 3,
        padding: 15,
      }}
    >
      <Text
        style={{
          color: "#001E62",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        STAY CONNECTED WITH IBK SHOE
      </Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20 }}>
        Be the first to know about the Latest Products, Exclusive Events &
        Exclusive Offers
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{
            backgroundColor: "white",
            width: "65%",
            height: 40,
            borderRadius: 20,
            marginTop: 20,
            marginRight: 30,
          }}
          placeholder="Enter Your Email Address"
        />
        <View style={{ marginTop: 25 }}>
          <Button title="Subscribe" color="#001E62" />
        </View>
      </View>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20 }}>
        By registering, you agree to receive our newsletter and information
        about our products, services and events through our communication
        channels and agree to our Terms and Conditions and Privacy Policy
      </Text>
        <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>STAY CONNECT</Text>

      <View style={{ flexDirection: "row", marginTop: 20, gap: 20 }}>
        <Entypo name="instagram-with-circle" size={35} color="black" />
        <Entypo name="facebook-with-circle" size={35} color="black" />
        <Entypo name="youtube-with-circle" size={35} color="black" />
      </View>
<View style={{ flexDirection: "row", marginTop: 20, gap: 80 }}>

      <View>
      <Text style={{ color: "#001E62", fontSize: 18, marginTop: 20, fontWeight: "bold" }}>TENTANG</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Tentang IBK Shoe</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Syarat dan Ketentuan</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Kebijakan Cookie</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Disclaimer</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Kebijakan Pribadi</Text>
      </View>

      <View>
      <Text style={{ color: "#001E62", fontSize: 18, marginTop: 20, fontWeight: "bold" }}>Pelayanan Pelanggan</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Informasi Pengiriman</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Hubungi Kami</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>kebijakan Pengembalian</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>FAQ</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Temukan Toko</Text>
      </View>
    </View>
    <View style={{ marginTop: 20 }}>
      <Text style={{ color: "#001E62", fontSize: 18, marginTop: 20, fontWeight: "bold" }}>PANDUAN UKURAN</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Panduan Ukuran</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Panduan Lebar Sepatu</Text>
      <Text style={{ color: "#001E62", fontSize: 15, marginTop: 20, fontWeight: "bold" }}>Panduan Ukuran Sepatu</Text>
      </View>
</View>
  );
};
