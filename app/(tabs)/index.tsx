import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
export default function foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={HomeScreen} />
      <Tab.Screen name="Liked" component={ProfileScreen} />
      <Tab.Screen name="Library" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>This is HomeScreen</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View>
      <Text>This is HomeScreen</Text>
    </View>
  );
}
