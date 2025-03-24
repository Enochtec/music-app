import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const playlists = [
  { id: "1", title: "Chill Vibes", image: require("@/assets/images/partial-react-logo.png") },
  { id: "2", title: "Hip-Hop Hits", image: require("@/assets/images/partial-react-logo.png") },
  { id: "3", title: "Lo-Fi Beats", image: require("@/assets/images/partial-react-logo.png") },
  { id: "4", title: "Top 50 Global", image: require("@/assets/images/partial-react-logo.png") },
];

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.heading}>
        Explore Music
      </ThemedText>
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    marginBottom: 12,
    textAlign: "center",
  },
  card: {
    flex: 1,
    margin: 8,
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
});
