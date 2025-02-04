import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Text } from 'react-native';

import { GalleryCard } from '../../components/GalleryCard';
import { usePictureGallery } from '../../api/usePictureGallery';
import { ActivityIndicator } from 'react-native';
import { PageHeading } from '../../components/PageHeading';

const GalleryScreen = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isFetching,
  } = usePictureGallery();

  return (
    <>
      <PageHeading title={'Gallery'} />
      <FlashList
        data={data?.pages.flatMap((page: { data: any }) => page.data)}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <GalleryCard item={item} />}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        refreshing={isFetching}
        onRefresh={refetch}
        onEndReachedThreshold={0.5}
        estimatedItemSize={100}
        ListFooterComponent={() =>
          isFetchingNextPage ? <ActivityIndicator /> : null
        }
      />
    </>
  );
};

export { GalleryScreen };
