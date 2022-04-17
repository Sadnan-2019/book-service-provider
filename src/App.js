// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="">
       <Header></Header>
       <Banner></Banner>
       <Services ></Services>
       <Footer></Footer>
      
    </div>
  );
}

export default App;
