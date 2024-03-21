import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import LayoutInit from './components/LayoutInit';
import BaseRoute from './apps/BaseRoute';

function App() {
  return (
    <Router>
      <LayoutInit>
        <BaseRoute/>
      </LayoutInit>
    </Router>
  );
}

export default App;
