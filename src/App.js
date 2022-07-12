import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import History from './screens/History';
import Home from './screens/Home';
import Introduction from './screens/Introduction';
import Market from './screens/Market';
import Tutorial from './screens/Tutorial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = { <Home />} />
        <Route path = "/Introduction" element = { <Introduction />} />
        <Route path = "/Tutorial" element = { <Tutorial />} />
        <Route path = "/History" element = { <History />} />
        <Route path = "/Market" element = { <Market />} />
      </Routes>
    </Router>
  );
}

export default App;
