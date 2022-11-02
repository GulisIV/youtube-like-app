const API_KEY = "AIzaSyAHR_M-m0C4RRxmLogLZY6aqkhLJ9O9E5g";
const part = "snippet";
const maxResults = 20;
const type = "video";

const searchURL = "https://www.googleapis.com/youtube/v3/search?";
const videosURL = "https://youtube.googleapis.com/youtube/v3/videos?";

export const getVideos = async ({ payload }) => {
  const result = await fetch(
    `${searchURL}part=${part}&q=${payload}&maxResults=${maxResults}&type=${type}&key=${API_KEY}`
  );
  const data = await result.json();
  return data;
};


export const getRelatedVideos = async ({ payload }) => {
  const result = await fetch(
    `${searchURL}part=${part}&relatedToVideoId=${payload}&maxResults=${maxResults}&type=${type}&key=${API_KEY}`
  );
  const data = await result.json();
  console.log(data);
  return data;
};

//only for properly authorized users
// export const getUserRecommendedVideos = async ({payload}) => {
//   const result = await fetch(
//     `${url}part=${part}&forMine=true&q=${payload}&maxResults=${maxResults}&type=${type}&key=${API_KEY}`
//   );
//   const data = await result.json();
//   console.log(data);
// };

export const getVideosRecommendationsByRegion = async ({ payload }) => {
  const result = await fetch(
    `${videosURL}part=${part}%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${payload}&maxResults=${maxResults}&key=${API_KEY}`
  );
  const data = await result.json();
  console.log(data);
  return data;
};

// curl \
//   'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed

//   export const getExtendedVideoInformation = async ({ payload }) => {
//     const result = await fetch(
//       `${searchURL}part=${part}&relatedToVideoId=${payload}&maxResults=${maxResults}&type=${type}&key=${API_KEY}`
//     );
//     const data = await result.json();
//     console.log(data);
//     return data;
//   };