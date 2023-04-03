
import './App.css';
import FullName from './components/Profile/FullName';
import Profession from './components/Profile/Profession';
import ProfilePhoto from './components/ProfilePhoto';

function App() {
  const alertMyInput = adress =>alert(adress)
  return (

    <div className="App">
    <h1>Hello</h1>
     <FullName name='ben maouia'/>
     <ProfilePhoto alertMyInput ={alertMyInput}/>
    <Profession name="farming"/>
  
    </div>

  );
}

export default App;
