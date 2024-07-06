import React from 'react';
import {Image} from 'react-native-elements';
import {StyleSheet, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';

interface IProps {
  imageUrl: string | undefined;
}

const ApodImage = (props: IProps): JSX.Element => {
  const navigation = useNavigation();
  const {imageUrl} = props;
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(Routes.FullScreenImage, {url: imageUrl})
      }>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.imageStyle} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 360,
  },
});

export default ApodImage;
