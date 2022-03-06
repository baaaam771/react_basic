import logo from './logo.svg';
import './App.css';
import {Component} from 'react'


// function WorldClock(props) {
//   return (
//     <div className={"WorldClock"}>
//       <h2>🌏도시: {props.city}</h2>
//       <p>⌚시간: {props.time}시</p>
//     </div>
//   )
// }

// 시 분 변화 동적으로 변하는 것을 만들고 싶다 state 활용
class WorldClock extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false,
    }
// this.setState
    this.timer = setInterval(() => {
      this.setState((state) => (
        state.minute === 59
        ? {hour: state.hour + 1, minute: 0}
        : {minute: state.minute + 1}
      ))
    } ,100)

  }

  handlingClick = (event) => {
    console.log(event.target)
    this.setState({stop: event.target.value})
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className={"WorldClock"}>
        <h2>🌏도시: {this.props.city}</h2>
        <p>⌚시간: {this.state.hour}시 {this.state.minute}분</p>
        <button value={true} onClick={this.handlingClick}>멈춰!</button>
      </div>
    )
  }

}


// function App() {
//   const cityTimeData = [
//     ['서울', 10],
//     ['베이징', 9],
//     ['시드니', 12],
//     ['LA', 17]
//   ]

//   const WorldClockList = cityTimeData.map((citytime, index)=>
//     <WorldClock city = {citytime[0]} time = {citytime[1]} key = {index} />
//   )
//   return (
//     <div className="App">
//       <h1 className={'myStyle'}>안녕하세요</h1>
//       <div className={'post'}>
//         첫 게시글입니다.
//       </div>
//       {/* <WorldClock city={'서울'} time={10} />
//       <WorldClock city={'베이징'} time={9} />
//       <WorldClock city={'시드니'} time={12} />
//       <WorldClock city={'LA'} time={17} /> */}
//       {WorldClockList}
//     </div>
//   );
// }

class App extends Component {

  constructor(props) {
    super(props)

    this.cityTimeData = [
      ['서울', 10],
      ['베이징', 9],
      ['시드니', 12],
      ['LA', 17]
    ]
    this.state = {
      content: ''
    }

  }

  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }
  
  render() {

    return (
      <div className="App">
        <h1 className={'myStyle'}>안녕하세요</h1>
        <div className={'post'}>
          첫 게시글입니다.
          <br />
          <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        </div>
        {this.cityTimeData.map((citytime, index)=>
          <WorldClock city = {citytime[0]} time = {citytime[1]} key = {index} />
        )}
      </div>
    );
  }
 
  
}

export default App;
