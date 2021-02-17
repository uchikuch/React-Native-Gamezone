import React, { useState } from "react";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Navigator from "./routes/Drawer";
import "react-native-gesture-handler";

export default function App() {
  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return <AppLoading />;
  }
}
