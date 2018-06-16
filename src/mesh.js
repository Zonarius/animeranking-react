import ReactMesh from 'react-mesh';
import Home from './components/schemas/Home';
import Year from './components/schemas/Year';
import Season from './components/schemas/Season';
import Reference from './components/microschemas/Reference';
import Tier from './components/microschemas/Tier';

const Mesh = ReactMesh({
  baseUrl: '/api/v1',
  projectName: 'animeranking',
  components: [
    Home, Year, Season, Reference, Tier
  ]
})

export default Mesh;