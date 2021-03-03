/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import useInterval from '../hooks/useInterval';

const API_BASE_URL = process.env.API_BASE_URL || '';
const REFETCH_INTERVAL = 30000;
const NOW_PLAYING_URL = `${API_BASE_URL}/api/currently-playing`;

export const SpotifyNowPlaying = () => {
  const [hasInitialFetched, setHasInitialFetched] = useState(false);
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
    const initialFetch = async () => {
      try {
        await fetchCurrentSong();
      } catch (error) {
        console.log(error); //eslint-disable-line
      }
      setHasInitialFetched(true);
    };
    initialFetch();
  }, []);

  useInterval(fetchCurrentSong, REFETCH_INTERVAL);
  return (
    <div>
      {!hasInitialFetched && <div>loading...</div>}
      {currentSong && currentSong.isPlaying && (
        <div>
          <div sx={{ display: 'flex' }}>
            <div>
              <img
                sx={{ height: '100px', width: '100px' }}
                src={currentSong.albumImageUrl}
                alt={`Album artwork for ${currentSong.title} by ${currentSong.artist}`}
              ></img>
              <div sx={{ fontWeight: 'bold', fontSize: '12px' }}>
                {currentSong.title}
              </div>
              <div sx={{ fontSize: '10px' }}>{currentSong.artist}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
