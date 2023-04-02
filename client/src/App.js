import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import Superadmin from './components/superadmin';
import Presuperadmin from './components/presuperadmin';
import Getsuperadmins from './components/getsuperadmins';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' Component={Navbar} />
        <Route path='/presuperadmin' Component={Presuperadmin} />
        <Route path='/superadmin' Component={Superadmin} />
        <Route path='/getsuperadmins' Component={Getsuperadmins} />
      </Routes>

    </>

  );
}

export default App;
