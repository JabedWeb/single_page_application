
import './App.css';
import Add_team from './Components/Admin/Add_Team/Add_team';
import View from './Components/Admin/View_Team/View';
import Header from './Components/header/Header';
import Single from './Components/Team/team_page/Single_page';
import Team from './Components/Team/Team';

function App() {
  return (
 
  <>
  <Header></Header>
  <Add_team></Add_team>
  <Team></Team>
  <Single></Single>

  <View></View>
  
  
  </>
  
    
  );
}

export default App;
