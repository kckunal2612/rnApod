import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const ApodVideoWebView = ({imageUrl}): JSX.Element => {
  return <WebView source={{uri: imageUrl}} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: '100%',
  },
});

export default ApodVideoWebView;
