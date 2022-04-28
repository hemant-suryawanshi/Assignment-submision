
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

import { Route,Routes} from "react-router-dom";


function App() {
return (
<div>
<Navbar/>
<Home/>
</div>
 );
}

export default App;
