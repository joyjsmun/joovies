import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from "expo-font";
import { Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Asset.loadAsync(require("./sky.jpeg"));
    await Font.loadAsync(Ionicons.font);
    await Image.prefetch(
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_KR?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657358000"
    );
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>We are done loading!</Text>;
}
