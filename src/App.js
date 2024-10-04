import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Social from './components/Social';
import Aboutus from './components/Aboutus';
import Initiatives from './components/Initiatives';
import Event from './components/Event';
import Footer from './components/Footer';
// imp

function App() {
  return (
    <>
    <Navbar/>
    {/* <img src=" \homepageimage.png" alt="E-cell" /> */} 
    <div class="d-flex justify-content-center">
    <img src="\homepageimage.png" class="img-fluid " alt="E-cell"></img>
    </div>

    <Social/>
    <Aboutus/>
    <Initiatives/>
    <Event/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
