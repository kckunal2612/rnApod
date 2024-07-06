import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

const ApodLoadingView = (): JSX.Element => {
  const navTheme = useTheme();
  return (
    <View style={styles.container}>
      <ActivityIndicator color={navTheme.colors.primary} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default ApodLoadingView;
