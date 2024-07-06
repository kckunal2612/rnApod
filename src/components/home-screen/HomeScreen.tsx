import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchApod} from '../../redux/actions/apodActions';
import {Dispatch} from 'redux';
import {IApod} from '../../models/apodModels';
import ApodImage from '../common/image/ApodImage';
import ApodErrorView from './components/ApodErrorView';
import ApodLoadingView from './components/ApodLoadingView';
import ApodContentView from './components/ApodContentView';
import ApodVideoWebView from './components/ApodVideoWebView';
import {getCurrentDateForGallery} from '../../utils/dates';
import FadeInView from '../common/FadeInView';
import {VerticalMargin} from '../common/VerticalMargin';

interface IProps {
  loading: boolean;
  data: IApod | undefined;
  error: any;
  theme: string;
  fetchPictureOfTheDay: (date: string) => void;
}

const HomeScreen = (props: IProps): JSX.Element => {
  const {loading, data, error, fetchPictureOfTheDay} = props;

  useEffect(() => {
    const loadImageOfTheDay = async () => {
      fetchPictureOfTheDay(getCurrentDateForGallery());
    };
    loadImageOfTheDay();
  }, [fetchPictureOfTheDay]);

  if (loading) {
    return <ApodLoadingView />;
  }

  if (error) {
    return <ApodErrorView />;
  }

  if (data) {
    const {title, date, url, hdurl, explanation, media_type, copyright} = data;
    const imageUrl = hdurl ? hdurl : url;

    const HeaderImageView = (
      <View>
        <ApodImage imageUrl={imageUrl} />
        <VerticalMargin />
      </View>
    );

    const ContentView = (
      <ApodContentView
        title={title}
        date={date}
        explanation={explanation}
        copyright={copyright}
      />
    );

    return (
      <FadeInView>
        <ScrollView>
          {imageUrl !== '' && media_type === 'image' && HeaderImageView}
          {imageUrl !== '' && media_type === 'video' && (
            <View>
              <VerticalMargin />
              <ApodVideoWebView imageUrl={imageUrl} />
              <VerticalMargin />
            </View>
          )}
          {ContentView}
        </ScrollView>
      </FadeInView>
    );
  }

  return <></>;
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme.theme,
    loading: state.pictureOfTheDay.loading,
    data: state.pictureOfTheDay.data,
    error: state.pictureOfTheDay.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchPictureOfTheDay: (date) => dispatch(fetchApod(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
