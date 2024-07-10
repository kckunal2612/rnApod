import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { UserFacingStrings } from '../constants/userFacingStrings';
import { PictureOfTheDay } from '../types';
import { formatDate } from '../utils/dateUtils';
import { cleanUpString } from '../utils/stringUtils';

type Props = { item: PictureOfTheDay };

const screenWidth = Dimensions.get('window').width;

const GalleryCard = ({ item }: Props) => {
  const title =
    cleanUpString(item?.copyright) ?? UserFacingStrings?.UNKNOWN_AUTHOR;
  const resourceUrl = item?.hdurl ?? item?.url;
  const imageDate = formatDate(item?.date);

  // We don't care about anything but images at this time
  if (item?.media_type !== 'image') return null;

  return (
    <View style={styles.itemContainer}>
      <FastImage
        style={styles.image}
        source={{ uri: resourceUrl }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.boldText}>{title}</Text>
        </View>
        <Text style={styles.subText}>{imageDate}</Text>
        <Text style={styles.subTextPrimary}>{item?.explanation}</Text>
      </View>
    </View>
  );
};

export { GalleryCard };

const styles = StyleSheet.create({
  itemContainer: {
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
  textContainer: {
    padding: 10,
  },
  subText: {
    fontSize: 13,
    color: 'grey',
    fontStyle: 'italic',
  },
  subTextPrimary: {
    fontSize: 13,
    color: '#e0e0e0',
  },
});
