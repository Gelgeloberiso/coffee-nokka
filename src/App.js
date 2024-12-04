import './App.css';
import About from './compenents/about/About';
import Header from './compenents/header/Header';
import Home from './compenents/home/Home';
import ContactUs from './compenents/contact-us/ContactUs';
import Gallery from './compenents/gallery/Gallery';
import Source from './compenents/source/Source';
import Footer from './compenents/footer/Footer';
import { useEffect, useState } from 'react';
import Preloader from './compenents/preloader/Preloader';



const App = ()=> {
   const [isLoading, setIsLoading] = useState(true);

   //let create asyc method to fetch

   useEffect(()=>{
    const dataFetch =()=>{
      setTimeout(()=>{
        setIsLoading(false)
      }, 2000)
    }
    dataFetch();
   }, []);

  return isLoading ? ( <Preloader />) : (
   <>
 
   <Header />
   <main >
     <Home />
     <Source />
     <Gallery />
     <About />
     <ContactUs />
     <Footer />
   </main>
   </>
  
  );
}

export default App;
