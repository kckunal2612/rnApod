import moment from 'moment';

enum DateFormat {
  READABLE_DATE_FORMAT = 'DD MMM YYYY',
  APOD_GALLERY_DATE_FORMAT = 'YYYY-MM-DD',
  LINK_SHARE_FORMAT = 'DDMMYY',
}

const getReadableDate = (dateString: string | undefined) => {
  try {
    return moment(dateString).format(DateFormat.READABLE_DATE_FORMAT);
  } catch (err) {
    return moment().format(DateFormat.READABLE_DATE_FORMAT);
  }
};

const getDateForLinkSharing = (dateString: string | undefined) => {
  try {
    return moment(dateString).format(DateFormat.LINK_SHARE_FORMAT);
  } catch (err) {
    return moment().format(DateFormat.LINK_SHARE_FORMAT);
  }
};

const getCurrentDateForGallery = () => {
  return moment().format(DateFormat.APOD_GALLERY_DATE_FORMAT);
};

const getOneDayPreviousDate = (inputDate: string) => {
  try {
    const previousMoment = moment(inputDate).subtract(1, 'day');
    return moment(previousMoment).format(DateFormat.APOD_GALLERY_DATE_FORMAT);
  } catch (err) {
    return inputDate;
  }
};

const getOneMonthPreviousDate = (inputDate: string) => {
  try {
    const previousMoment = moment(inputDate).subtract(1, 'month');
    return moment(previousMoment).format(DateFormat.APOD_GALLERY_DATE_FORMAT);
  } catch (err) {
    return inputDate;
  }
};

export {
  getReadableDate,
  getDateForLinkSharing,
  getOneDayPreviousDate,
  getOneMonthPreviousDate,
  getCurrentDateForGallery,
  DateFormat,
};
