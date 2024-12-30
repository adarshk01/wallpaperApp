import { DownloadPicture } from "@/components/BottomSheet";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView>
      <Text>Account Page</Text>

      <View>
        <Button
          title="Open Bottom sheet"
          onPress={function () {
            setVisible(!visible);
          }}
        ></Button>
      </View>
      {visible && <DownloadPicture />}
    </SafeAreaView>
  );
}
