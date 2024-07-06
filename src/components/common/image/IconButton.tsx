import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

interface IProps {
  iconName: string;
  onPressIcon: () => void;
}

const IconButton = (props: IProps): JSX.Element => {
  const navTheme = useTheme();
  const {iconName, onPressIcon} = props;
  return (
    <Icon
      name={iconName}
      size={28}
      color={navTheme.colors.text}
      style={styles.iconContainer}
      onPress={onPressIcon}
    />
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 15,
  },
});

export default IconButton;
