//https://ideogram.ai/assets/progressive-image/balanced/response/w9GBFCVlQBeQAXHWgMnRRw

import { Link } from "expo-router";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DownloadPicture } from "@/components/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import ImageCard from "@/components/ImageCard";
import { useWallpaper } from "@/hooks/useWallpaper";

export default function explore() {
  const [pictureOpen, setPictureOpen] = useState(false);
  const colorScheme = useColorScheme();
  function handleDragDown() {
    setPictureOpen(false);
  }
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <ParallaxScrollView
          headerBackgroundColor={{ dark: "black", light: "white" }}
          headerImage={
            <Image
              style={{ flex: 1 }}
              source={{
                uri: "https://ideogram.ai/assets/progressive-image/balanced/response/roQ7mpdURdS_GA6BA0mm-g",
              }}
            />
          }
        >
          <View style={{}}>
            <Text
              style={{
                color: colorScheme === "dark" ? "white" : "black",
                fontSize: 20,
              }}
            >
              Explore Page
            </Text>
            <View
              style={{
                flex: 1,
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {useWallpaper().map(function (wallpaper) {
                  return (
                    <Pressable
                      onPress={function () {
                        setPictureOpen(!pictureOpen);
                      }}
                    >
                      <ImageCard key={wallpaper.id} {...wallpaper} />
                    </Pressable>
                  );
                })}
              </View>
            </View>
          </View>
        </ParallaxScrollView>{" "}
      </SafeAreaView>
      {pictureOpen && (
        <DownloadPicture style={{ flex: 1 }} onDragDown={handleDragDown} />
      )}
    </GestureHandlerRootView>
  );
}
