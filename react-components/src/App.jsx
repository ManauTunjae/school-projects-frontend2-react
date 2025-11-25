import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  
  let myInfo = [{
        firstName: 'Manau',
        lastName: 'Tunjae',
        myClass: 'WEBB25',
        className: 'Fullstack Web development'
    }];

  return (
    <div>
      <h1>This is a React exercise of WEBB25</h1>
      <h2>Exercise React Components</h2>
      {myInfo.map((info) => <Header info={info}/>)}
      <Main />
      <Footer/>
    </div>
  );
};

export default App;
