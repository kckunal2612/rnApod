import RNFetchBlob from 'rn-fetch-blob';

const getExtention = (filename: string) => {
  //To get the file extension
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

const downloadFile = (imageUrl: string) => {
  let date = new Date();
  let ext = getExtention(imageUrl);
  const {config, fs} = RNFetchBlob;
  let PictureDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path:
        PictureDir +
        '/image_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        '.' +
        ext,
      description: 'Image',
    },
  };
  config(options)
    .fetch('GET', imageUrl)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export {getExtention, downloadFile};
