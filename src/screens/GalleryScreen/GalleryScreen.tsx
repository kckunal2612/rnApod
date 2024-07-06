// src/screens/GalleryScreen.tsx

import { ListItem } from '@rneui/themed';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { useGalleryQuery } from '../../hooks/usePictureGallery';
import styles from './GalleryScreen.styles';

const GalleryScreen: React.FC = () => {
  const { data, error, isLoading } = useGalleryQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading gallery</Text>;

  return (
    <View style={[styles.container]}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
};

export default GalleryScreen;
