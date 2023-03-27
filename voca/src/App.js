import Hello from './component/Hello';
import './App.css';
import Welcome from './component/Welcome';
import World from './component/World';

function App() {
  const name = "명근아 환영한다 드디어 돌아왔구나 명태식이"
  const naver = {
    name: "네이버",
    url: "https://www.naver.com/"
  }
  const facebook = {
    name: "페이스북",
    url: "https://www.facebook.com"
  }
  return (
    <div className="App">
      <h1 style = {{
         color : "#ff2",
         backgroundColor : "blue"
         }}>
          Welcome
      </h1>
      <a href={naver.url}>{naver.name}</a>
      <br/>
      <a href={facebook.url}>{facebook.name}</a>
      <h4>아래는 컴포넌트 실습</h4>
      <p><Hello/> <Hello/> <Hello/> <World/> </p>
      
      
        </div>
  );
}

export default App;
