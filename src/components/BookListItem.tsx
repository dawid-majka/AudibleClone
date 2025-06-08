import { Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { usePlayer } from "@/providers/PlayerProvider";

type Book = {
  id: string;
  title: string;
  author: string;
  audio_url: string;
  thumbnail_url?: string;
};

type BookListItemProps = {
  book: Book;
};

export default function BookListItem({ book }: BookListItemProps) {
  const { setBook } = usePlayer();

  // AsChild allows us to forward props to first child (it needs to have onPress or onClick)
  // This way we do not render additional wrapper (Link) around our content
  return (
    // <Link href="/player" asChild>
    <Pressable
      className="flex-row gap-2 items-center"
      onPress={() => setBook(book)}
    >
      <Image
        source={{ uri: book.thumbnail_url }}
        className="w-16 aspect-square rounded-md"
      />
      <View className="flex-col flex-1 gap-1">
        <Text className="text-2xl text-gray-100 font-bold">{book.title}</Text>
        <Text className="text-gray-400">{book.author}</Text>
      </View>

      <AntDesign name="playcircleo" size={24} color="gainsboro" className="" />
    </Pressable>
    // </Link>
  );
}
