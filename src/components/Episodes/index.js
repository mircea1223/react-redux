import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useFetchCharacters from '../hooks/useFetchCharacters';
import './styles.css';

const Episodes = (props) => {
  const {episodes} = props;
  const [{ isLoading, characters }, loadCharacters] = useFetchCharacters();
  const navigate = useNavigate();

  const getId = (url) => url.split('/').pop();

  const onButtonClick = (episodeId) => {
    if (!episodeId) return;
    navigate(`${episodeId}/characters`);

    //const currentEpisode = episodes.find(({id}) => id === episodeId);
    // if (currentEpisode) {
    //   const {characters} = currentEpisode;
    //   const result = characters.reduce((prev, curr, idx) => {
    //     const idCharacter = getId(curr);
    //     return idx === 0 ? idCharacter : `${prev},${idCharacter}`;
    //   }, '');
    //
    //   loadCharacters(result);
    // }
  };

  return (
    <>
      <ul>
        {
          (episodes || []).map(({id, name, air_date: airDate, episode}) => {
            return (
              <li key={id}>
                {name}
                <button onClick={() => onButtonClick(id)}>View characters</button>
              </li>
            );
          })
        }
      </ul>
      {isLoading ? ('Loading...') : null}
    </>
  );
};

Episodes.propTypes = {
  episodes: PropTypes.array.isRequired
};

export default Episodes;