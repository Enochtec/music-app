import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function NowPlaying() {
  return (
    <View style={styles.container}>
      {/* Album Art */}
      <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.albumArt} />

      {/* Song Details */}
      <Text style={styles.songTitle}>Song Title</Text>
      <Text style={styles.artist}>Artist Name</Text>

      {/* Player Controls */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <Text style={styles.controlButton}>⏮️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.controlButton}>⏯️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.controlButton}>⏭️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  albumArt: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  artist: {
    fontSize: 18,
    color: '#aaa',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  controlButton: {
    fontSize: 30,
    color: '#fff',
  },
});
