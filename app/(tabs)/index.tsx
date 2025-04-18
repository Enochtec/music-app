import { Image, StyleSheet, Platform, Button } from "react-native";
import { useNavigation } from "expo-router"; // Import navigation
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const songs = [
  { id: "1", title: "Song One", artist: "Artist A" },
  { id: "2", title: "Song Two", artist: "Artist B" },
];

export default function HomeScreen() {
  const navigation = useNavigation(); // Get navigation instance

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image source={require("@/assets/images/partial-react-logo.png")} style={styles.reactLogo} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">🎵 My Music App</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">🎶 Available Songs</ThemedText>
        {songs.map((song) => (
          <ThemedView key={song.id} style={styles.songContainer}>
            <ThemedText type="defaultSemiBold">{song.title}</ThemedText>
            <ThemedText>{song.artist}</ThemedText>
          </ThemedView>
        ))}
      </ThemedView>

      {/* 🔥 Now Playing Button */}
      <ThemedView style={styles.buttonContainer}>
        <Button title="🎧 Now Playing" onPress={() => navigation.navigate("now-playing")} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  songContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
