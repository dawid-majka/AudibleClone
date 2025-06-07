import { View, Text } from "react-native";
import { ScreenStackHeaderRightView } from "react-native-screens";

type PlaybackBarProps = {
  currentTime: number;
  duration: number;
};

export default function PlaybackBar({
  currentTime,
  duration,
}: PlaybackBarProps) {
  let progress = currentTime / duration;

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <View className="gap-4">
      <View className="w-full bg-slate-900 h-2 rounded-full justify-center">
        <View
          className="bg-orange-400 h-full rounded-full"
          style={{ width: `${progress * 100}%` }}
        />
        <View
          className="absolute w-3 h-3 -translate-x-1/2 rounded-full bg-orange-400"
          style={{ left: `${progress * 100}%` }}
        />
      </View>
      <View className="flex-row items-center justify-between ">
        <Text className="text-white">{formatTime(currentTime)}</Text>
        <Text className="text-white">{formatTime(duration)}</Text>
      </View>
    </View>
  );
}
