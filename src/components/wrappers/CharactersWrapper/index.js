import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import Characters from "../../Characters";
import { setCharacters } from "../../Characters/state/slice";
import useFetchCharacters from "../../hooks/useFetchCharacters";
import useFetchCharactersId from "../../hooks/useFetchCharactersId";

const CharactersWrapper = () => {
    const [{ isLoading, characters}, loadCharacters] = useFetchCharacters()
    const episodes = useSelector((state) => state.episodes);
    const { episodeId } = useParams();
    const { characterIds } = useFetchCharactersId(episodes, episodeId);
    const dispatch = useDispatch();
    
        
    useEffect(() => {
        if (characterIds){
            loadCharacters(characterIds);
        }
    }, [characterIds]);
    
    useEffect(() => {
        if(characters.length){
            dispatch(setCharacters({
                episodeId,
                characters,
            }))
        }
    }, [characters]);

    return (
        <>
            {isLoading ? 'Loading characters...' : ''}
            {!isLoading && <Characters characterList={characters} />}
        </>
    );
    
};

export default CharactersWrapper;