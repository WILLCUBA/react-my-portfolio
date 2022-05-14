import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Nav from './components/Nav';
import AboutMe from './components/About-Me';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [currentPage, setCurrentPage] = useState("About-Me")

  const renderPage = () => {
    if(currentPage === "About-Me") {
      return (
        <AboutMe></AboutMe>
      )
    }
    if (currentPage === "Portfolio") {
      return (
        <Portfolio></Portfolio>
      )
    }
    if (currentPage === "Contact") {
      return (
        <Contact></Contact>
      )
    }
    if (currentPage === "Resume") {
      return (
        <Resume></Resume>
      )
    }
  }
  
  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div className="App">
      <header className="m-1 w-100">
        <div className="flex-column text-center m-1 w-100">
            <img src={require('./assets/imgs/myavatar.png')} alt="avatar"></img>
            <p>Hello, I'm</p>
            <h1>William Pinero Gonzalez</h1>
            <p>Full Stack Web Developer</p>
        </div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
      </header>
        <Footer></Footer>
    </div>
  );
}

export default App;
