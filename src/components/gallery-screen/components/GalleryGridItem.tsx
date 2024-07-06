/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {Theme, useNavigation, useTheme} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {Card} from 'react-native-elements';
import {getReadableDate} from '../../../utils/dates';

interface IProps {
  apodItem: any;
}

const getStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    galleryGridImage: {
      margin: 0,
      resizeMode: 'cover',
      height: 250,
      width: '100%',
    },
  });
  return styles;
};

const GalleryGridItem = (props: IProps): JSX.Element => {
  const navigation = useNavigation();
  const navTheme = useTheme();

  const {apodItem} = props;
  const {item} = apodItem;
  const {title, date, media_type, url} = item;
  let imageUrl: string | undefined = 'https://i.imgur.com/P2B8ikV.jpg';
  if (media_type === 'image') {
    imageUrl = url;
  }
  const styles = getStyles(navTheme);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate(Routes.Details, {data: item});
        }}>
        <Card
          containerStyle={styles.galleryGridImage}
          featuredTitle={title}
          featuredTitleStyle={{textAlign: 'center', paddingHorizontal: 20}}
          featuredSubtitle={getReadableDate(date)}
          featuredSubtitleStyle={{fontWeight: 'normal'}}
          imageStyle={styles.galleryGridImage}
          image={{uri: imageUrl}}
        />
      </Pressable>
    </View>
  );
};

export default GalleryGridItem;
