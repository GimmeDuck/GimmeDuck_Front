import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import History from './screens/History';
import Home from './screens/Home';
import Introduction from './screens/Introduction';
import Market from './screens/Market';
import Tutorial from './screens/Tutorial';
import NavBarElements from './components/NavBarElements';
import Buyegg from './screens/Buyegg';
import Custom from './screens/Custom';


function App() {
  return (
    <Router>
      <NavBarElements />
      <Routes>
        <Route path = "/" element = { <Home />} />
        <Route path = "/Introduction" element = { <Introduction />} />
        <Route path = "/Tutorial" element = { <Tutorial />} />
        <Route path = "/History" element = { <History />} />
        <Route path = "/Market" element = { <Market />} />

        <Route path = "/Buyegg" element = { <Buyegg />} />
        <Route path = "/Custom" element = { <Custom />} />
      </Routes>
    </Router>
  );
}

export default App;
