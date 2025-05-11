import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-primary text-5xl">Hello Bri</Text>
      <Link href={{pathname: "/movie/[id]",
      params: { id: "Avengers"}}}>
        Avengers
      </Link>
    </View>
  );
}
