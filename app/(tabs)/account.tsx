import { DownloadPicture } from "@/components/BottomSheet";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function account() {
  const [pictureOpen, setPictureOpen] = useState(false);

  function handleDragDown() {
    setPictureOpen(false);
  }

  return (
    // <GestureHandlerRootView>
    //   <View>
    //     <Text>Account Page</Text>
    //   </View>
    //   <View>
    //     <Button
    //       title="Open Bottom sheet"
    //       onPress={function () {
    //         setPictureOpen(!pictureOpen);
    //       }}
    //     ></Button>
    //   </View>
    //   {pictureOpen && <DownloadPicture onDragDown={handleDragDown} />}
    // </GestureHandlerRootView>
    <SafeAreaView>
      <Text>Account Page</Text>
      <Link href={"/accountInfo"}>
        <Text>Account Info</Text>
      </Link>
    </SafeAreaView>
  );
}
