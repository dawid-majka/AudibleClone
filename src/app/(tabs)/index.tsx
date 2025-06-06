import { FlatList } from "react-native";

import books from "@/dummyBooks";

import BookListItem from "@/components/BookListItem";

export default function App() {
  return (
    // Renders list of componenets. }
    // Required fields: data - array of things we want to render, renderItem - how do i want to render them }
    <FlatList
      data={books}
      renderItem={({ item }) => <BookListItem book={item} />}
      // keyExtractor={(book) => book.id}

      // We can manage spacing on component level, but they can be reused somwhere else and its better to manage spacing at
      // list level so we can do distinct spacing at each place we reused our component
      // contentContainerStyle={{ gap: 3 }}
      // Both can be used to styling but we can use below to use tailwind classes
      contentContainerClassName="gap-3 p-4"
    />
  );
}
