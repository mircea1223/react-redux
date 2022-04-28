import { Link } from 'react-router-dom';
import Routes from '../../routes';
import './styles.css';

const App = () => (
  <>
    <nav>
      <div><Link to="/">Homepage</Link></div>
      <div><Link to="/episodes">Episodes</Link></div>
    </nav>
    <Routes />
  </>
);

export default App;
