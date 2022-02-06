import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
// import './App.css';

function App() {
  return (
    <>
      <Header/>
      <main >
          <LandingPage/> 
      </main>
      <Footer/>
    </>
  );
}

export default App;
