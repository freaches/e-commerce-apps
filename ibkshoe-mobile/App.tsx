import { StatusBar } from "expo-status-bar";
import { MainContainer } from "./src/navigation/MainContainer";
import { ScrollView } from "react-native";
import { Splash } from "./src/navigation/screen/Splash";
import { useEffect, useState } from "react";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      
      setIsShowSplash(false);
    }, 2000);
  })
  return (
    <>
      {/* <StatusBar style="auto" /> */}
      {isShowSplash ? <Splash /> : <MainContainer />}
    </>
  );
}
