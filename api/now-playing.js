const querystring = require('querystring');
const fetch = require('node-fetch');

const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

module.exports = async (req, res) => {
  const nowPlaying = await getNowPlaying();

  if (nowPlaying.status === 204 || nowPlaying.status > 400) {
    return res.status(204);
  }
  const json = await nowPlaying.json();
  const isPlaying = json?.is_playing;
  const title = json?.item.name;
  const artist = json?.item.artists.map((_artist) => _artist.name).join(', ');
  const album = json?.item.album.name;
  const albumImageUrl = json?.item.album.images[0].url;
  const songUrl = json?.item.external_urls.spotify;

  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=60, stale-while-revalidate=30'
  // );

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
};
