import React, { useEffect } from 'react';
import cn from 'classnames';
import './styles.css';

const Characters = (props) => {
  const { characterList } = props;


  const classes = cn('characters-container');
  return (
    <div className={classes}>
      {!characterList.length ? 'Character list placeholder' : ''}
      {
        characterList.map(({id, name, image}) => {
          return (
            <figure key={`character-${id}`}>
              <div className="character-name" title={name}>{name}</div>
              <div className="character-image">
                <img alt={`${name}'s logo`} src={image} />
              </div>
            </figure>
          );
        })
      }
    </div>
  );
};



export default Characters;