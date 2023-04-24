// import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StevePage from "./pages/StevePage";
import ElonPage from "./pages/ElonPage";
import JackPage from "./pages/JackPage";
import ErrorPage from "./pages/ErrorPage";
import MarkPage from "./pages/MarkPage";
import Navigation from './components/navbar/Navigation';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact';


function App() {
  // const [color, setColor] = useState('bg-blue-600');
  // color = "bg-blue-500";
  // const [color, setColor] = useSate("bg-blue-500");
  return (
    <Router>
      
      <Navigation /*color={color} setColor={setColor}*//>
      <Routes>
        <Route path='/steve' element=<StevePage/> />
        <Route path='/elon' element=<ElonPage/> />
        <Route path='/jack' element=<JackPage/> />
        <Route path='/mark' element=<MarkPage/> />
        <Route path='/contact' element=<Contact/> />
        <Route path='/*' element=<ErrorPage/> />
      </Routes>
     <Footer /*color={color}*//>
    </Router>
  )
}

export default App;
