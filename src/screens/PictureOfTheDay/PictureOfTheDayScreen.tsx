// src/screens/PictureOfTheDayScreen/PictureOfTheDayScreen.tsx

import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { usePictureOfTheDay } from '../../hooks/usePictureOfTheDay';
import styles from './PictureOfTheDayScreen.styles';
import ERROR_MESSAGES from '../../constants/errors';
import PictureCard from '../../components/PictureCard';

const PictureOfTheDayScreen: React.FC = () => {
  const { data, error, isLoading } = usePictureOfTheDay();

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text>{ERROR_MESSAGES.FETCH_PICTURE_OF_THE_DAY}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data && <PictureCard picture={data} />}
    </View>
  );
};

export { PictureOfTheDayScreen };
