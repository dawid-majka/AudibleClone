import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import books from "./src/dummyBooks";

const book = books[0];

export default function App() {
  return (
    <View className="bg-slate-950 flex-1 justify-center p-4">
      {/* Book Row */}
      <View className="flex-row gap-2 items-center">
        <Image
          source={{ uri: book.thumbnail_url }}
          className="w-16 aspect-square rounded-md"
        />
        <View className="flex-col flex-1 gap-1">
          <Text className="text-2xl text-gray-100 font-bold">{book.title}</Text>
          <Text className="text-gray-400">{book.author}</Text>
        </View>

        <AntDesign
          name="playcircleo"
          size={24}
          color="gainsboro"
          className=""
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
