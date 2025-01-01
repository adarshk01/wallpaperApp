//https://ideogram.ai/assets/progressive-image/balanced/response/w9GBFCVlQBeQAXHWgMnRRw

import { Link } from "expo-router";
import { Button, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DownloadPicture } from "@/components/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import ImageCard from "@/components/ImageCard";
import { useWallpaper } from "@/hooks/useWallpaper";

export default function explore() {
  const [pictureOpen, setPictureOpen] = useState(false);

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
            <Text>Explore Page</Text>
            {useWallpaper().map(function (wallpaper) {
              return (
                <Pressable
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: 10,
                  }}
                  onPress={function () {
                    setPictureOpen(!pictureOpen);
                  }}
                >
                  <ImageCard key={wallpaper.id} {...wallpaper} />
                </Pressable>
              );
            })}
          </View>
        </ParallaxScrollView>{" "}
      </SafeAreaView>
      {pictureOpen && <DownloadPicture onDragDown={handleDragDown} />}
    </GestureHandlerRootView>
  );
}

// //https://ideogram.ai/assets/progressive-image/balanced/response/w9GBFCVlQBeQAXHWgMnRRw

// import { Link } from "expo-router";
// import { Button, Image, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { DownloadPicture } from "@/components/BottomSheet";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { useState } from "react";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import ImageCard from "@/components/ImageCard";
// import { useWallpaper } from "@/hooks/useWallpaper";

// export default function explore() {
//   const [pictureOpen, setPictureOpen] = useState(false);

//   function handleDragDown() {
//     setPictureOpen(false);
//   }
//   return (
//     <GestureHandlerRootView>
//       <View style={{ flex: 1 }}>
//         {" "}
//         <ParallaxScrollView
//           headerBackgroundColor={{ dark: "black", light: "white" }}
//           headerImage={
//             <Image
//               style={{ flex: 1 }}
//               source={{
//                 uri: "https://ideogram.ai/assets/progressive-image/balanced/response/w9GBFCVlQBeQAXHWgMnRRw",
//               }}
//             />
//           }
//         ></ParallaxScrollView>{" "}
//         <View style={{ flex: 1 }}>
//           <Text>Explore Page</Text>

//           <View>
//             <Button
//               title="Open Bottom sheet"
//               onPress={function () {
//                 setPictureOpen(!pictureOpen);
//               }}
//             ></Button>
//           </View>
//           {pictureOpen && <DownloadPicture onDragDown={handleDragDown} />}

//           {useWallpaper().map(function (wallpaper) {
//             return (
//               <ImageCard
//                 key={wallpaper.id}
//                 {...wallpaper}
//                 onPress={function () {
//                   setPictureOpen(!pictureOpen);
//                 }}
//               />
//             );
//           })}
//         </View>
//       </View>
//     </GestureHandlerRootView>
//   );
// }
