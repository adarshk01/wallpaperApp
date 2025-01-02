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
      style={{ position: "relative", overflow: "hidden", borderRadius: 15 }}
    >
      <Image
        source={{ uri: url }}
        style={{
          width: 155,
          height: 200,
          marginTop: 25,
          borderRadius: 15,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(73, 73, 73, 0.8)",
          padding: 5,
          paddingLeft: 10,
        }}
      >
        <Text style={{ color: "white" }}>{name}</Text>
      </View>
    </View>
  );
}
