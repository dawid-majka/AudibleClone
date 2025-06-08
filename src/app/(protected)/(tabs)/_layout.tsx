import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { BottomTabBar } from "@react-navigation/bottom-tabs";
import FloatingPlayer from "@/components/FloatingPlayer";

export default function RootLayout() {
  return (
    // We can customize whole Tabs like:
    // <Tabs
    //   screenOptions={{
    //     tabBarShowLabel: false,
    //     tabBarActiveTintColor: "cyan",
    //     tabBarInactiveTintColor: "gray",
    //   }}
    // >
    <Tabs
      tabBar={(props) => (
        <>
          <FloatingPlayer />
          <BottomTabBar {...props} />
        </>
      )}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
