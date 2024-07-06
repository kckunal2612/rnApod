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
      <Text style={styles.title}>{picture.title}</Text>
      <Text style={styles.date}>{picture.date}</Text>
      <Text style={styles.explanation}>{picture.explanation}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 16,
  },
  explanation: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default PictureCard;
