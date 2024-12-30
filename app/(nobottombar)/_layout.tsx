import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function rootLayout() {
  return (
    <View>
      <View style={{ backgroundColor: "red" }}>
        <Text>Root Layout</Text>
      </View>
      <Slot />
    </View>
  );
}
