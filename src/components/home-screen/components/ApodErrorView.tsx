import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const ApodErrorView = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../../../assets/animations/astronaut_animation.json')}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.errorText}>{'Something went wrong'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  animationContainer: {
    height: 300,
  },
  errorText: {
    marginTop: 15,
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default ApodErrorView;
