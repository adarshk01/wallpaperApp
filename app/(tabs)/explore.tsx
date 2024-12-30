import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
  return (
    <SafeAreaView>
      <Text>Explore Page</Text>
      <Link href={"/accountInfo"}>
        <Text>Account Info</Text>
      </Link>
    </SafeAreaView>
  );
}
