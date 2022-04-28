import { Routes, Route } from 'react-router-dom';
import EpisodesWrapper from '../components/wrappers/EpisodesWrapper';
import HomeWrapper from '../components/wrappers/HomeWrapper';
import CharactersWrapper from '../components/wrappers/CharactersWrapper';

const routes = () => (
  <Routes>
    <Route path="/" element={<HomeWrapper />} />
    <Route path="episodes" element={<EpisodesWrapper />}>
      <Route path=":episodeId/characters" element={<CharactersWrapper  />} />
    </Route>
  </Routes>
);

export default routes;