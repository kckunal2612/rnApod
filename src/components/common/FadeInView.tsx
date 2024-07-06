import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

interface FadeInViewProps {
  duration?: number;
  style?: any;
  children: React.ReactElement;
}

const FadeInView = (props: FadeInViewProps) => {
  const {duration = 300, style, children} = props;
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [duration, fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
