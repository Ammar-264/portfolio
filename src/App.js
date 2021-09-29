
import './App.css';
import Navbar from './components/navbar';
import Contact from './components/contactSection';
import { Svganimated, Text } from './components/firstSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SecondSectionSvg , SecondSectionDetails} from './components/secondsection';
import { ThirdSectionDetails, ThirdSectionSvg } from './components/thirdsection';

function App() {


  return (
    <div className="App">
      <Navbar homeId='#home' contactId='#contact' skillsId='#secondSec'/>
      <div className='container-lg'>
        <div className='row mt-5'>
          <Text id='home'/>
          <Svganimated />
         
        </div>
        <div className='row mt-5 d-flex justify-content-between'>
        <SecondSectionSvg />
        <SecondSectionDetails id = 'secondSec'/>
        </div>
        <div className=' row my-5 d-flex justify-content-between'>
          <ThirdSectionDetails />
          <ThirdSectionSvg/>

        </div>
        <div className=' row my-5 d-flex justify-content-between'>
          <Contact id='contact'/>
        </div>
      </div>


    </div>
  );
}

export default App;
