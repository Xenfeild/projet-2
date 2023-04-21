// import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StevePage from "./pages/StevePage"
import ElonPage from "./pages/ElonPage"
import JackPage from "./pages/JackPage"
import ErrorPage from "./pages/ErrorPage"
import MarkPage from "./pages/MarkPage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element=<StevePage/> />
        <Route path='/' element=<ElonPage/> />
        <Route path='/' element=<JackPage/> />
        <Route path='/' element=<MarkPage/> />
        <Route path='/' element=<ErrorPage/> />
      </Routes>
    </Router>
  )
}

export default App;
