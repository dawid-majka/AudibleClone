import { useAuth } from "@clerk/clerk-expo";
import { ActivityIndicator } from "react-native";
import { Stack, Redirect } from "expo-router";

export default function ProtectedLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  // TODO: White flickering here and when pressing back from Player

  if (!isLoaded) {
    return <ActivityIndicator />;
  }

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="player"
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
    </Stack>
  );
}
