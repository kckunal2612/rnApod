import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import GalleryGridItem from './components/GalleryGridItem';
import {Dispatch} from 'redux';
import {
  fetchGallery as fetchGalleryAction,
  resetGallery as resetGalleryAction,
} from '../../redux/actions/galleryActions';
import ApodErrorView from '../home-screen/components/ApodErrorView';
import {
  getCurrentDateForGallery,
  getOneDayPreviousDate,
  getOneMonthPreviousDate,
} from '../../utils/dates';

interface IProps {
  loading: boolean;
  data: [] | undefined;
  error: any;
  startDate: string | undefined;
  endDate: string | undefined;
  fetchGallery: (startDate: string, endDate: string) => void;
  resetGallery: () => void;
}

const GalleryScreen = (props: IProps): JSX.Element => {
  const {
    data,
    startDate,
    endDate,
    fetchGallery,
    resetGallery,
    loading,
    error,
  } = props;

  const loadGalleryData = () => {
    // our end-date will be today's date
    const newEndDate = getCurrentDateForGallery();
    // the new start-date will be one month before the newly computed end-date
    // (since we're getting data 1 month at a time)
    const newStartDate = getOneMonthPreviousDate(newEndDate);
    fetchGallery(newStartDate, newEndDate);
  };

  const loadMore = () => {
    if (startDate && endDate) {
      // previous start-date will give us the new end-date
      const newEndDate = getOneDayPreviousDate(startDate);
      // the new start-date will be one month before the newly computed end-date
      // (since we're getting data 1 month at a time)
      const newStartDate = getOneMonthPreviousDate(newEndDate);
      fetchGallery(newStartDate, newEndDate);
    } else {
      loadGalleryData();
    }
  };

  const handleGalleryRefresh = () => {
    resetGallery();
    loadGalleryData();
  };

  useEffect(() => {
    loadGalleryData();
    return () => {
      resetGallery();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <ApodErrorView />;
  }

  return (
    <FlatList
      data={data}
      onRefresh={handleGalleryRefresh}
      refreshing={loading}
      extraData={data}
      onEndReached={loadMore}
      onEndReachedThreshold={0.4}
      keyExtractor={(item) => item.date}
      numColumns={2}
      renderItem={(item) => <GalleryGridItem apodItem={item} />}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.gallery.loading,
    data: state.gallery.data,
    error: state.gallery.error,
    startDate: state.gallery.startDate,
    endDate: state.gallery.endDate,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchGallery: (startDate: string, endDate: string) =>
      dispatch(fetchGalleryAction(startDate, endDate)),
    resetGallery: () => dispatch(resetGalleryAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);
