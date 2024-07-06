import React, {useCallback} from 'react';
import {ScrollView, StyleSheet, Linking, View, Switch} from 'react-native';
import {connect} from 'react-redux';
import BodyText from '../common/text/BodyText';
import {APOD_ABOUT, ATTRIBUTION_TEXT} from '../../utils/strings';
import HTML from 'react-native-render-html';
import {Theme, useTheme} from '@react-navigation/native';
import HeadingText from '../common/text/HeadingText';
import {setTheme, toggleTheme} from '../../redux/actions/themeActions';
import {Dispatch} from 'redux';
import {VerticalMargin} from '../common/VerticalMargin';
import IconButton from '../common/image/IconButton';

interface AboutScreenProps {
  toggleCurrentTheme: () => void;
  setCurrentTheme: (theme: string | null) => void;
}

const getStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    headingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: {
      padding: 15,
      backgroundColor: theme.colors.background,
    },
    themeToggle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
      marginBottom: 15,
    },
    verticalMargin: {
      marginVertical: 10,
    },
  });
  return styles;
};

const getTagsStyle = (theme: Theme) => {
  return {
    p: {color: theme.colors.text},
    a: {color: theme.colors.primary},
  };
};

const AboutScreen = (props: AboutScreenProps): JSX.Element => {
  const {toggleCurrentTheme} = props;
  const navTheme = useTheme();
  const styles = getStyles(navTheme);

  const openLink = useCallback((event, href) => {
    try {
      if (Linking.canOpenURL(href)) {
        Linking.openURL(href);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const iconName = navTheme.dark ? 'moon-outline' : 'sunny';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headingRow}>
        <HeadingText text={'About'} />
        <View style={styles.switchContainer}>
          <IconButton iconName={iconName} onPressIcon={() => {}} />
          <Switch onValueChange={toggleCurrentTheme} value={navTheme.dark} />
        </View>
      </View>

      <VerticalMargin size={'large'} />

      <BodyText text={APOD_ABOUT} />
      <View style={styles.verticalMargin} />

      <HTML
        tagsStyles={getTagsStyle(navTheme)}
        html={ATTRIBUTION_TEXT}
        onLinkPress={openLink}
      />
      <View style={styles.verticalMargin} />
      <View style={styles.verticalMargin} />
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentTheme: (theme: string) => dispatch(setTheme(theme)),
    toggleCurrentTheme: () => dispatch(toggleTheme()),
  };
};

export default connect(null, mapDispatchToProps)(AboutScreen);
