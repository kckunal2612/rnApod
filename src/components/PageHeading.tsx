import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

export const PageHeading = ({ title }: Props) => {
  return <Text style={styles.headingText}>{title}</Text>;
};

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
