import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';
import { useRandomGallery } from '../../api/useRandomGallery';
import { GalleryCard } from '../../components/GalleryCard';
import { PageHeading } from '../../components/PageHeading';

const RandomGalleryScreen = () => {
  const { isFetching, data, refetch } = useRandomGallery();

  return (
    <View style={styles.container}>
      <PageHeading title={'Random'} />
      <FlashList
        data={data}
        onRefresh={refetch}
        refreshing={isFetching}
        renderItem={({ item }) => <GalleryCard item={item} />}
        keyExtractor={(item) => item.date}
        numColumns={1}
        estimatedItemSize={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subText: {
    fontSize: 13,
    color: 'grey',
    fontStyle: 'italic',
    padding: 5,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export { RandomGalleryScreen };
