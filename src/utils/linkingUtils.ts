import {Linking} from 'react-native';

const openLink = async (url: string | undefined) => {
  if (url) {
    try {
      if (await Linking.canOpenURL(url)) {
        await Linking.openURL(url);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export {openLink};
