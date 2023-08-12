import logo from './logo.svg';
import './App.css';

const getData = ()=>{
  /*fetch(
      "https://ecommerce-sport-production.up.railway.app/blog?page=0&size=6",
      {

      })
      .then(response => {
        console.log(response.ok);
        return response.json()
      }).then(data => {
    console.log(data);
  })*/
    const raw = JSON.stringify({
        "birthDate": "1999-01-01",
        "name": "Name",
        "surname": "Surname"
    });

    const requestOptions = {
        method: 'POST',
        body: raw,
    };

    fetch("https://ecommerce2-sport-production.up.railway.app/auth/registration",
        requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    /*var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("localhost:8181/auth/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));*/
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
