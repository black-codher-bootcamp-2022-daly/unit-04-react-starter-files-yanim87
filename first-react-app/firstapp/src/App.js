import logo from './logo.svg';
import './App.css';

function Header (){
  return <h1>Yetunde was here</h1>
}
;
// function Header (props) {
//   const {name, color, fruit, className } =props;

//   return (
//     <h1 className={className} >
//       {name} is {color} like a {fruit}
//     </h1>
//   );
// }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );{
}

export default App;
