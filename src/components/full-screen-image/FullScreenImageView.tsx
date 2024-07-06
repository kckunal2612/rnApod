import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const FullScreenImageView = ({route}): JSX.Element => {
  const navigation = useNavigation();
  const {params} = route;
  const url = params.url ? params.url : '';

  useEffect(() => {
    navigation.setOptions({title: ' '});
  }, [navigation]);

  return <WebView source={{uri: url}} style={{flex: 1}} />;
};

export default FullScreenImageView;
