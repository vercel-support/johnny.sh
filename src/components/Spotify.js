/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import useInterval from '../hooks/useInterval';

const API_BASE_URL = process.env.API_BASE_URL || '';
const REFETCH_INTERVAL = 30000;
const NOW_PLAYING_URL = `${API_BASE_URL}/api/now-playing`;

export const SpotifyNowPlaying = () => {
  const [currentSong, setCurrentSong] = useState();
  const [isLoading, setIsloading] = useState(false);

  const fetchCurrentSong = async () => {
    try {
      const res = await (await fetch(NOW_PLAYING_URL)).json();
      setCurrentSong(res);
    } catch (error) {
      console.log({ error }); //eslint-disable-line
    }
  };

  useEffect(() => {
    fetchCurrentSong();
  }, []);

  useInterval(fetchCurrentSong, REFETCH_INTERVAL);
  return <div></div>;
};
