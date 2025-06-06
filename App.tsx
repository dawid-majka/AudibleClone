import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-slate-950 flex-1 items-center justify-center">
      <Text className="text-2xl text-red-100 font-bold">We are live</Text>
      <StatusBar style="auto" />
    </View>
  );
}
