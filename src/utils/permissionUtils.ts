import {PermissionsAndroid} from 'react-native';

const checkStoragePermissionAndroid = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission Required',
        message: 'This app needs access to your storage to download Photos',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //Once user grant the permission start downloading
      console.log('Storage Permission Granted.');
      return true;
    } else {
      //If permission denied then show alert 'Storage Permission Not Granted'
      return false;
    }
  } catch (err) {
    //To handle permission related issue
    console.warn(err);
  }
};

export {checkStoragePermissionAndroid};
