import { FlashList } from '@shopify/flash-list';
import React, { useCallback } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Icon } from '@rneui/themed';

import { usePictureGallery } from '../../hooks/usePictureGallery';
import { PictureOfTheDay } from '../../types';
import { formatDate } from '../../utils/dateUtils';
import { cleanUpString } from '../../utils/stringUtils';

const screenWidth = Dimensions.get('window').width;

const GalleryScreen = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isFetching,
  } = usePictureGallery();

  const renderItem = useCallback(({ item }: { item: PictureOfTheDay }) => {
    const title = cleanUpString(item?.copyright) ?? 'Uncredited';
    const resourceUrl = item?.hdurl ?? item?.url;
    const imageDate = formatDate(item?.date);
    return (
      <View>
        {item.media_type === 'image' ? (
          <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
              <View style={styles.row}>
                <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
                <Text style={styles.boldText}>{title}</Text>
              </View>

              <Text style={styles.subText}>{imageDate}</Text>
            </View>

            <FastImage
              style={styles.image}
              source={{ uri: resourceUrl }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
        ) : null}
      </View>
    );
  }, []);

  return (
    <FlashList
      data={data?.pages.flatMap((page: { data: any }) => page.data)}
      keyExtractor={(item) => item.date}
      renderItem={renderItem}
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
        isFetchingNextPage ? <Text>Loading more...</Text> : null
      }
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  image: {
    width: screenWidth,
    height: screenWidth, // Square image
  },
  videoPlaceholder: {
    width: screenWidth,
    height: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  videoText: {
    color: '#fff',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  textContainer: {
    padding: 10,
  },
  subText: {
    fontSize: 13,
    backgroundColor: '#fff',
    color: 'grey',
    fontStyle: 'italic',
  },
});

export { GalleryScreen };
