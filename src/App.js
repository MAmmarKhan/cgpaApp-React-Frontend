import './stylesheets/App.css';
import './stylesheets/mobileResponsive.css';
import $ from 'jquery';
import { GpaInput } from './components/GpaInput';
import { ModifyRows } from './components/ModifyRows';
import image from './Assets/Working.png';

function App() {

    $( document ).ready(function() {
      $("#AppID").css({background:'linear-gradient(red,blue,red)'});
      $('#sideNav').hide();     
    });
    function openSideNav(){
        $('#sideNav').slideToggle("slow");
    }
    
  return (
    <div className="App">
      <p></p>
      <div class="container rounded-top" style={{backgroundColor:'#2B4141',padding:'10px 0px 10px 25px', display:'flex',alignItems: 'center'}}> 
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-justify" viewBox="0 0 16 16" onClick={openSideNav}>
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <div style={{ width:'100%'}}>
          <h3>GPA Calculator</h3>
        </div>
      </div>
      <div className="sideNav" id="sideNav">
        <p></p>
        <h4 style={{color:'white'}}>ABOUT</h4>
        <div style={{display:'flex',alignItems: 'center'}}>
          <p className="introText" >This GPA Calculator is made with React <i class="fab fa-react" spin ></i> and Redux, one of the latest web development technologies in the market right now. I encourage you all to learn and make something similar. If you need guidence Feel Free to contact me at: ammarkhan9094@gmail.com</p>
          
          <img src={image} width={150} height='auto' alt="Developer"></img>
        </div>
      </div>
      <div class="container mainContainer" style={{backgroundColor:'#8AB9B5',padding:'10px -10px', paddingTop:'25px' ,marginBottom:'25px'}}> 
        <GpaInput></GpaInput>
        <ModifyRows></ModifyRows>
        <footer style={{fontSize: '14px'}}> Made By Foxy &copy;</footer>
      </div>
      
    </div>
  );
}

export default App;
