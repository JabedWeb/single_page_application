
import './App.css';
import Add_team from './Components/Admin/Add_Team/Add_team';
import View from './Components/Admin/View_Team/View';
import Header from './Components/header/Header';
import Single from './Components/Team/team_page/Single_page';
import Team from './Components/Team/Team';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {
  return (
  <>
  <BrowserRouter>
  <Header></Header>
  <Routes>
    <Route path='/' element={<Team></Team>}/>
    <Route path='/single/:username' element={<Single></Single>}/>
    <Route path='/admin' element={<View></View>}/>
    <Route path='add_devs' element={<Add_team></Add_team>}/>
  </Routes>
  </BrowserRouter>
  
  
  </>
  
    
  );
}

export default App;
