import ReactMesh from 'react-mesh';
import Home from './components/schemas/Home';
import Year from './components/schemas/Year';

const Mesh = ReactMesh({
  baseUrl: '/api/v1',
  projectName: 'animeranking',
  components: [
    Home, Year
  ]
})

export default Mesh;