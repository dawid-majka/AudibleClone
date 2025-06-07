import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { useState } from "react";
import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import { ScreenStackHeaderRightView } from "react-native-screens";

type PlaybackBarProps = {
  currentTime: number;
  duration: number;
  onSeek: (seconds: number) => void;
};

export default function PlaybackBar({
  currentTime,
  duration,
  onSeek,
}: PlaybackBarProps) {
  const [width, setWidth] = useState(0);

  let progress = currentTime / duration;

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const onHandleSeek = (event: GestureResponderEvent) => {
    const xPosition = event.nativeEvent.locationX;
    const ratio = xPosition / width;
    const newPosition = ratio * duration;
    onSeek(newPosition);
  };

  return (
    <View className="gap-4">
      <Pressable
        onPress={onHandleSeek}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
        className="w-full bg-slate-900 h-2 rounded-full justify-center"
        hitSlop={{ top: 20, bottom: 20 }}
      >
        <View
          className="bg-orange-400 h-full rounded-full"
          style={{ width: `${progress * 100}%` }}
        />
        <View
          className="absolute w-3 h-3 -translate-x-1/2 rounded-full bg-orange-400"
          style={{ left: `${progress * 100}%` }}
        />
      </Pressable>
      <View className="flex-row items-center justify-between ">
        <Text className="text-white">{formatTime(currentTime)}</Text>
        <Text className="text-white">{formatTime(duration)}</Text>
      </View>
    </View>
  );
}
