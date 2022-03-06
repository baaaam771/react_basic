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
  const cityTimeData = [
    ['서울', 10],
    ['베이징', 9],
    ['시드니', 12],
    ['LA', 17]
  ]

  const WorldClockList = cityTimeData.map((citytime, index)=>
    <WorldClock city = {citytime[0]} time = {citytime[1]} key = {index} />
  )
  return (
    <div className="App">
      <h1 className={'myStyle'}>안녕하세요</h1>
      <div className={'post'}>
        첫 게시글입니다.
      </div>
      {/* <WorldClock city={'서울'} time={10} />
      <WorldClock city={'베이징'} time={9} />
      <WorldClock city={'시드니'} time={12} />
      <WorldClock city={'LA'} time={17} /> */}
      {WorldClockList}
    </div>
  );
}

export default App;
