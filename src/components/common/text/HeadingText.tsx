import React from 'react';
import {Text} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';

interface IProps {
  text: string | undefined;
}

const HeadingText = (props: IProps): JSX.Element => {
  const navTheme = useTheme();
  const {text} = props;
  return (
    <Text style={{color: navTheme.colors.text}} h4>
      {text}
    </Text>
  );
};

export default HeadingText;
