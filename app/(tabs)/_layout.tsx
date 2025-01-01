// import { Text, View } from "react-native";
// import Index from ".";
// import { Link, Slot } from "expo-router";
// // import { Link } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Layout() {
//   return (
//     <SafeAreaView>
//       <View style={{ height: "90%" }}>
//         <Slot />
//       </View>
//       <View
//         style={{
//           backgroundColor: "red",
//           padding: 10,
//           display: "flex",
//         }}
//       >
//         {/* <Text>Hello World</Text> */}
//         <Link href={"/foryou"}>
//           <Text>foryou</Text>
//         </Link>
//         <Link href="/explore">
//           <Text>explore</Text>
//         </Link>
//         <Link href="/account">
//           <Text>account</Text>
//         </Link>
//       </View>
//     </SafeAreaView>
//   );
// }
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "For you",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
