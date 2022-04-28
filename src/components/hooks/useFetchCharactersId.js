import { useEffect, useState } from "react";

const useFetchCharactersId = (episodes, episodeId) => {
    const [characterIds, setCharacterIds] = useState();

    useEffect( () => {
        
        const getId = (url) => url.split('/').pop();
        const EpisodeIdInt = parseInt(episodeId);
        const currentEpisode = episodes.find(({id}) => id === EpisodeIdInt);

        if(currentEpisode) {
            const {characters} = currentEpisode;
            const result = characters.reduce((prev, curr, idx) => {
                const idCharacter = getId(curr);
                return idx === 0 ? idCharacter : `${prev}, ${idCharacter}`;
            }, '');
            setCharacterIds(result);
        }



    }, [episodeId]);

    return { characterIds };
};

export default useFetchCharactersId