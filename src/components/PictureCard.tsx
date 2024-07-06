// src/components/PictureCard.tsx

import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { PictureOfTheDay } from '../types';

interface PictureCardProps {
  picture: PictureOfTheDay;
}

const PictureCard: React.FC<PictureCardProps> = ({ picture }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: picture.url }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{picture.title}</Text>
        <Text style={styles.date}>{picture.date}</Text>
        <Text style={styles.explanation}>{picture.explanation}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textContainer: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  date: {
    fontSize: 18,
    color: 'white',
    marginBottom: 16,
  },
  explanation: {
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
  },
});

export default PictureCard;
