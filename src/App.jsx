import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutme/AboutMe';
// import EmployeeInfo from './components/employeeinformation/EmployeeInfo';
import Employee from './components/employeeinformation/Employee';
import PresidentVoting from './components/presidents/PresidentVoting';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
        <Header />
        <PresidentVoting />
        <AboutMe />
        <Employee />
        <Footer />
    </div>
  );
}

export default App;
