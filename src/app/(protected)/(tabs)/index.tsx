import { ActivityIndicator, FlatList, Text } from "react-native";

import BookListItem from "@/components/BookListItem";
import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "@/lib/supabase";

export default function App() {
  const supabase = useSupabase();

  const { data, error, isLoading } = useQuery({
    queryKey: ["my-books"],
    queryFn: async () =>
      supabase.from("user_books").select("*, book:books(*)").throwOnError(),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text className="color-white">Error: {error.message}</Text>;
  }

  console.log(JSON.stringify(data));

  return (
    // Renders list of componenets. }
    // Required fields: data - array of things we want to render, renderItem - how do i want to render them }
    <FlatList
      data={data?.data}
      renderItem={({ item }) => <BookListItem book={item.book} />}
      // keyExtractor={(book) => book.id}

      // We can manage spacing on component level, but they can be reused somwhere else and its better to manage spacing at
      // list level so we can do distinct spacing at each place we reused our component
      // contentContainerStyle={{ gap: 3 }}
      // Both can be used to styling but we can use below to use tailwind classes
      contentContainerClassName="gap-3 p-4"
    />
  );
}
