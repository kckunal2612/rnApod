import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Share from 'react-native-share';
import {IApod} from '../../models/apodModels';
import ApodImage from '../common/image/ApodImage';
import ApodContentView from './components/ApodContentView';
import {useNavigation} from '@react-navigation/native';
import ApodVideoWebView from './components/ApodVideoWebView';
import FadeInView from '../common/FadeInView';
import IconButton from '../common/image/IconButton';
import {checkStoragePermissionAndroid} from '../../utils/permissionUtils';
import {downloadFile} from '../../utils/fileUtils';
import {openLink} from '../../utils/linkingUtils';
import {getDateForLinkSharing} from '../../utils/dates';

interface IProps {
  loading: boolean;
  data: IApod | undefined;
  error: any;
  navigation: any;
  route: any;
}

const INITIAL_APOD_STATE: IApod = {
  title: '',
  date: '',
  url: '',
  hdurl: '',
  copyright: '',
  explanation: '',
  media_type: '',
  service_version: '',
};

const DetailsScreen = (props: IProps): JSX.Element => {
  const navigation = useNavigation();
  const {route} = props;
  const [intentData, setIntentData] = useState(INITIAL_APOD_STATE);

  const onRightButtonClick = React.useCallback(async () => {
    const {url, media_type} = intentData;
    if (media_type === 'image') {
      const isPermissionGranted = await checkStoragePermissionAndroid();
      if (isPermissionGranted) {
        const {url} = intentData;
        if (url) {
          downloadFile(url);
        }
      }
    } else if (media_type === 'video') {
      openLink(url);
    }
  }, [intentData]);

  const handleShare = React.useCallback(() => {
    const {date} = intentData;
    const formattedDate = getDateForLinkSharing(date);
    const SHARE_URL = `https://apod.nasa.gov/apod/ap${formattedDate}.html`;
    console.log(SHARE_URL);
    Share.open({url: SHARE_URL})
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        err && console.log(err);
      });
  }, [intentData]);

  useEffect(() => {
    const {media_type} = intentData;
    let iconName = 'download-outline';
    if (media_type === 'video') {
      iconName = 'open-outline';
    }
    // set header right button
    navigation.setOptions({
      title: ' ',
      headerRight: () => {
        return (
          <View style={{flexDirection: 'row'}}>
            <IconButton
              iconName={'share-social-outline'}
              onPressIcon={handleShare}
            />
            <IconButton iconName={iconName} onPressIcon={onRightButtonClick} />
          </View>
        );
      },
    });
  }, [handleShare, intentData, navigation, onRightButtonClick]);

  useEffect(() => {
    if (route.params && route.params.data) {
      const {data} = route.params;
      setIntentData(data);
    }
  }, [onRightButtonClick, navigation, route.params]);

  const {title, date, url, explanation, media_type, copyright} = intentData;
  const imageUrl = url;

  const HeaderImageView = (
    <View>
      <ApodImage imageUrl={imageUrl} />
    </View>
  );

  return (
    <FadeInView>
      <ScrollView>
        {imageUrl !== '' && media_type === 'image' && HeaderImageView}
        {imageUrl !== '' && media_type === 'video' && (
          <ApodVideoWebView imageUrl={imageUrl} />
        )}
        {title !== '' && (
          <ApodContentView
            title={title}
            date={date}
            explanation={explanation}
            copyright={copyright}
          />
        )}
      </ScrollView>
    </FadeInView>
  );
};

export default DetailsScreen;
