import { Theme, useTheme } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { APOD_ABOUT } from '../../constants/userFacingStrings';
import { PageHeading } from '../../components/PageHeading';

const getStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    aboutText: {
      color: 'white',
      fontSize: 15,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: {
      padding: 15,
      backgroundColor: theme.colors.background,
    },
    verticalMargin: {
      marginVertical: 10,
    },
  });
  return styles;
};

const AboutScreen = (): JSX.Element => {
  const navTheme = useTheme();
  const styles = getStyles(navTheme);

  return (
    <>
      <PageHeading title={'About'} />
      <ScrollView style={styles.container}>
        <Text style={styles.aboutText}>{APOD_ABOUT}</Text>
        <View style={styles.verticalMargin} />
      </ScrollView>
    </>
  );
};

export { AboutScreen };
