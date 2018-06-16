import ReactMesh from 'react-mesh';
import Home from './components/schemas/Home';

const Mesh = ReactMesh({
  baseUrl: '/api/v1',
  projectName: 'animeranking',
  components: [
    Home
  ]
})

export default Mesh;