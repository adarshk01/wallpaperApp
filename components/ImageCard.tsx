import { Image, Text, View } from "react-native";

export default function ImageCard({ url, name }: any) {
  return (
    <View
    // style={{
    //   display: "flex",
    //   flexDirection: "row",
    //   justifyContent: "space-between",
    //   margin: 10,
    // }}
    >
      <Image
        source={{ uri: url }}
        style={{ width: 300, height: 300, marginTop: 10, borderRadius: 25 }}
      />
    </View>
  );
}
