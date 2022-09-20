// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Services from './components/Service';
import Contact from './components/Contact';
import About from './components/About';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PServices from './components/PremiumService';
import EServices from './components/Economicservice';
import users from './components/UserList';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/UserList' element={<UserList/>}>
      <Route path=":userId" element={<UserDetails/>}></Route>
      </Route>
      <Route path='/Services' element={<Services/>}>
        <Route path='PServices' element={<PServices/>}></Route>
        <Route path='EServices' element={<EServices/>}></Route>
      </Route>
     
        
      
    </Routes>
    </div>
  );
}

export default App;
