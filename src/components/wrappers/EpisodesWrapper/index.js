import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Episodes from '../../Episodes';
import useFetchEpisodes from '../../hooks/useFetchEpisodes';
import { setEpisodes } from '../../Episodes/state/slice';
import './styles.css';

const EpisodesWrapper = (props) => {
  const { episodes, isLoading } = useFetchEpisodes();
  const dispatch = useDispatch();

  useEffect(() => {
    if (episodes.length) {
      dispatch(setEpisodes(episodes));
    }
  }, [episodes]);

  return (
    <>
      <div className="episodes-wrapper">
        {isLoading ? 'Loading in progress...' : ''}
        {
          !isLoading && <Episodes episodes={episodes} />
        }
      </div>
      <Outlet customProp="test" />
    </>
  );
};

export default EpisodesWrapper;