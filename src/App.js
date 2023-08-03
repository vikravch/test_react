import logo from './logo.svg';
import './App.css';

const getData = ()=>{
  fetch("https://ecommerce-sport-production.up.railway.app/blog?page=0&size=6")
      .then(response => {
        console.log(response.ok);
        return response.json()
      }).then(data => {
    console.log(data);
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick = {()=>{getData()}}>Get data</button>
      </header>
    </div>
  );
}

export default App;
