import logo from './logo.svg';
import './App.css';

const getData = ()=>{
    var myHeaders = new Headers();
    myHeaders.append("AccessToken", "eyJhbGciOiJIUzM4NCJ9.eyJpc3MiOiJFY29tbWVyY2VKV1QiLCJzdWIiOiJKV1QtQWNjZXNzIiwidXNlcm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRob3JpdGllcyI6IlJPTEVfQURNSU4iLCJpYXQiOjE2OTQ0NDczMjcsImV4cCI6MTY5NDQ2MTcyN30.WACl62828CAtz2Sj1schGZpuS0OGMGg944UFD4OiWwn5ulfb641vqk3BTBwhXUEg")
    myHeaders.append("RefreshToken", "eyJhbGciOiJIUzM4NCJ9.eyJpc3MiOiJFY29tbWVyY2VKV1QiLCJzdWIiOiJKV1QtUmVmcmVzaCIsInVzZXJuYW1lIjoiYWRtaW5AYWRtaW4uY29tIiwiYXV0aG9yaXRpZXMiOiJST0xFX0FETUlOIiwiaWF0IjoxNjk0NDQ3MzI3LCJleHAiOjE2OTQ0NzYxMjd9.0TZwiD9VmvjEx3SQko1kDfsWcq-b8eL10X68ecRB5m4tCiSa6Vv2Ct3n7MVvsht1")

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    fetch("https://ecommerce3-sport-production.up.railway.app/profile", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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
