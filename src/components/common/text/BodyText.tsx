import React from 'react';
import {StyleSheet, TextProps} from 'react-native';
import {Text} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';

interface IProps {
  type?: 'primary' | 'secondary';
  text: string | undefined;
}

const BodyText = (props: IProps & TextProps): JSX.Element => {
  const {text, type} = props;
  const navTheme = useTheme();

  const styles = StyleSheet.create({
    bodyStyle: {
      fontSize: 15,
      lineHeight: 25,
      color: navTheme.colors.text,
    },
    secondaryText: {
      color: '#616161',
      fontSize: 13,
    },
  });

  const textType = type ? type : 'primary';
  const textStyle =
    textType === 'secondary'
      ? {...styles.bodyStyle, ...styles.secondaryText}
      : {...styles.bodyStyle};
  return (
    <Text style={textStyle} {...props}>
      {text}
    </Text>
  );
};

export default BodyText;
