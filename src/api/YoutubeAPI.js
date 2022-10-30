const API_KEY = "AIzaSyAHR_M-m0C4RRxmLogLZY6aqkhLJ9O9E5g";
const part = "snippet";
const maxResults = 20;
const locationRadius = 500;
const type = "video";

const url = "https://www.googleapis.com/youtube/v3/search?";

export const getVideos = async ({ payload }) => {
  const result = await fetch(
    `${url}part=${part}&q=${payload}&maxResults=${maxResults}&type=${type}&key=${API_KEY}`
  );
  const data = await result.json();
  return data;
};

export const getRelatedVideos = async ({ payload }) => {
  const result = await fetch(
    `${url}part=${part}&relatedToVideoId=${payload}&maxResults=${maxResults}&type=${type}&key=${API_KEY}`
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

export const getLocationRecommendedVideos = async ({ payload }) => {
  const result = await fetch(
    `${url}part=${part}&location=${payload}&locationRadius=${locationRadius}km&maxResults=${maxResults}&type=${type}&key=${API_KEY}`
  );
  const data = await result.json();
  console.log(data);
  return data;
};
