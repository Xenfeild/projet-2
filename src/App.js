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
import StagairePage from './pages/StagairePage';
import BlogPage from './pages/BlogPage';
import { useState } from 'react';
import ShowPost from './pages/ShowPost';
import ShowStagiaire from './pages/ShowStagiaire';





function App() {
  const [society,setSociety] =useState("Apple");
  const [blog,setBlog] =useState ("bienvenu sur le blog")
  // const [color, setColor] = useState('bg-blue-600');
  // color = "bg-blue-500";
  // const [color, setColor] = useSate("bg-blue-500");
  return (
    <Router>
      
      {/* <Navigation/> */}
      <Routes>
        <Route path='/steve' element=<StevePage society={society} blog={blog}/> />
        <Route path='/elon' element=<ElonPage/> />
        <Route path='/jack' element=<JackPage/> />
        <Route path='/mark' element=<MarkPage/> />
        <Route path='/contact' element=<Contact/> />
        <Route path='/stagiaire' element=<StagairePage/> />
        <Route path='/blog' element=<BlogPage blog={blog}/> />
        <Route path='/post/:id' element=<ShowPost/> />
        <Route path='user/:id' element=<ShowStagiaire/> />
        <Route path='/*' element=<ErrorPage/> />
      </Routes>
     {/* <Footer /> */}
    </Router>
  )
}

export default App;
