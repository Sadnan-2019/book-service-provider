// import logo from './logo.svg';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MoreService from './components/MoreService/MoreService';
import Register from './components/Register/Register';
import RequiureAuth from './components/RequiureAuth/RequiureAuth';
// import Services from './components/Services/Services';

function App() {
  return (
    <div className="">
       <Header></Header>
       <Banner></Banner>
       {/* <Services ></Services> */}
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/blog' element={<Blogs/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/more-service/:serviceID' element={<MoreService/>}></Route>
         
         <Route path='/checkout' element={<RequiureAuth>
          <Checkout/>
         </RequiureAuth>}></Route>
         <Route path='/about' element={<About/>}></Route>
       </Routes>
       
       <Footer></Footer>
      
    </div>
  );
}

export default App;
