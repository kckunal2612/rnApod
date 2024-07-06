import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';
import { GalleryCard } from '../../components/GalleryCard';
import { useRandomGallery } from '../../hooks/useRandomGallery';

const RandomGalleryScreen = () => {
  const { isFetching, data, refetch } = useRandomGallery();

  const renderFooter = () => {
    return isFetching ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  };

  if (!data) return;

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        onRefresh={refetch}
        refreshing={isFetching}
        renderItem={({ item }) => <GalleryCard item={item} />}
        keyExtractor={(item) => item.date}
        numColumns={1}
        estimatedItemSize={100}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export { RandomGalleryScreen };
