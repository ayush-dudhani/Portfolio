import './App.css';
import Achievement from './Components/AchievementCard/Achievement';
import Footer from './Components/Footer/Footer';
import Topbar from './Components/Header/Topbar';
import Project from './Components/Projects/Project';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Topbar/> 
      <Home/>
      <Achievement/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
