import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useSupabase } from "@/lib/supabase";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import DiscoverBookListItem from "@/components/DiscoverBookListItem";

export default function Discover() {
  const supabase = useSupabase();

  const { data, error, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: () => supabase.from("books").select("*").throwOnError(),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  console.log(JSON.stringify(data));

  return (
    <FlatList
      data={data?.data || []}
      contentContainerClassName="gap-3 p-2"
      renderItem={({ item }) => <DiscoverBookListItem book={item} />}
    />
  );
}
