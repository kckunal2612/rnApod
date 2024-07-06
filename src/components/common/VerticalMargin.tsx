import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

const MarginTypes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extraLarge',
};

interface VerticalMarginProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
}

const VerticalMargin = (props: VerticalMarginProps) => {
  const {size = MarginTypes.MEDIUM} = props;
  let verticalMargin = 10;
  switch (size) {
    case MarginTypes.SMALL:
      verticalMargin = 5;
      break;
    case MarginTypes.MEDIUM:
      verticalMargin = 10;
      break;
    case MarginTypes.LARGE:
      verticalMargin = 15;
      break;
    case MarginTypes.EXTRA_LARGE:
      verticalMargin = 20;
      break;
  }

  return <View style={{height: verticalMargin}} />;
};

VerticalMargin.propTypes = {
  type: PropTypes.string,
};

export {VerticalMargin};
