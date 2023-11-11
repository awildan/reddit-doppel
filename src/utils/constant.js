// asume this is for .env

export const SUB_REDDIT = 'valorant';
export const BASE_URL_API = 'https://www.reddit.com';
export const EMPTY_IMAGE_DARK = 'https://placehold.co/128x100/A6ADBA/1D232A/png??font=inter&text==';
export const AVATAR_IMAGE =
  'https://styles.redditmedia.com/t5_28g8e5/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfNmFjYjhmYjgyODgwZDM5YzJiODQ0NmY4Nzc4YTE0ZDM0ZWU2Y2ZiN18xODM4MzM_rare_d74d8ce5-f183-455c-9097-5a9e69c5cf71-headshot.png?width=256&height=256&crop=256:256,smart&s=9dc39f01236b49850fefad0f3232057740414f2b';

export const THUMBNAIL = (image) =>
  image === 'self' || image === 'default' ? EMPTY_IMAGE_DARK : image.replaceAll('&amp;', '&');
