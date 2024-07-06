import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeadingText from '../../common/text/HeadingText';
import BodyText from '../../common/text/BodyText';
import {getReadableDate} from '../../../utils/dates';
import {Theme, useTheme} from '@react-navigation/native';

interface IProps {
  title: string | undefined;
  date: string | undefined;
  explanation: string | undefined;
  copyright: string | undefined;
}

const getStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      backgroundColor: theme.colors.background,
    },
    date: {
      marginVertical: 10,
    },
    bottomMargin: {
      marginBottom: 20,
    },
  });
  return styles;
};

const ApodContentView = (props: IProps): JSX.Element => {
  const {title, date, explanation, copyright} = props;
  const navTheme = useTheme();
  const styles = getStyles(navTheme);
  return (
    <View>
      <View style={styles.container}>
        <HeadingText text={title} />
        <View style={styles.date}>
          <BodyText type={'secondary'} text={getReadableDate(date)} />
        </View>
        <BodyText text={explanation} />
        {copyright && (
          <BodyText type={'secondary'} text={'Copyrights : ' + copyright} />
        )}
      </View>
      <View style={styles.bottomMargin} />
    </View>
  );
};

export default ApodContentView;
