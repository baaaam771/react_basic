import logo from './logo.svg';
import './App.css';


function WorldClock(props) {
  return (
    <div className={"WorldClock"}>
      <h2>🌏도시: {props.city}</h2>
      <p>⌚시간: {props.time}시</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1 className={'myStyle'}>안녕하세요</h1>
      <div className={'post'}>
        첫 게시글입니다.
      </div>
      <WorldClock city={'서울'} time={10} />
      <WorldClock city={'부산'} time={10} />
    </div>
  );
}

export default App;
