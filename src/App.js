import './App.css';
import $ from 'jquery';
import { GpaInput } from './components/GpaInput';
import { ModifyRows } from './components/ModifyRows';

function App() {
    $("#AppID").css({background:'linear-gradient(red,blue,red)'});
  
  return (
    <div className="App">
      <p></p>
      <div class="container rounded-top" style={{backgroundColor:'#2B4141',padding:'10px 0px'}}> <h3>GPA Calculator</h3></div>
      <div class="container" style={{backgroundColor:'#8AB9B5',padding:'10px -10px', paddingTop:'25px' ,marginBottom:'25px'}}> 
        <GpaInput></GpaInput>
        <ModifyRows></ModifyRows>
      </div>
      
    </div>
  );
}

export default App;
