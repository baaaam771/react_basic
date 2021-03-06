import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import {PureComponent} from 'react'


// function WorldClock(props) {
//   return (
//     <div className={"WorldClock"}>
//       <h2>πλμ: {props.city}</h2>
//       <p>βμκ°: {props.time}μ</p>
//     </div>
//   )
// }

// μ λΆ λ³ν λμ μΌλ‘ λ³νλ κ²μ λ§λ€κ³  μΆλ€ state νμ©
class WorldClock extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false,
    }

    console.log("  Child) μμν©λλ€.")

  }

  componentDidMount() {
  // this.setState
    this.timer = setInterval(() => {
      this.setState((state) => (
        state.minute === 59
        ? {hour: state.hour + 1, minute: 0}
        : {minute: state.minute + 1}
      ))
    } ,5000)  

    console.log("  Child) λ§μ΄νΈλμμ΅λλ€.")
  }

  componentDidUpdate() {
    console.log("  Child) μλ°μ΄νΈ!")
  }

  componentWillUnmount() {
    console.log("  Child) μΈλ§μ΄νΈ!")
    clearInterval(this.timer)
  }

  handlingClick = (event) => {
    console.log(event.target)
    this.setState({stop: event.target.value})
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className={"WorldClock"}>
        <h2>πλμ: {this.props.city}</h2>
        <p>βμκ°: {this.state.hour}μ {this.state.minute}λΆ</p>
        <button value={true} onClick={this.handlingClick}>λ©μΆ°!</button>
      </div>
    )
  }

}


// function App() {
//   const cityTimeData = [
//     ['μμΈ', 10],
//     ['λ² μ΄μ§', 9],
//     ['μλλ', 12],
//     ['LA', 17]
//   ]

//   const WorldClockList = cityTimeData.map((citytime, index)=>
//     <WorldClock city = {citytime[0]} time = {citytime[1]} key = {index} />
//   )
//   return (
//     <div className="App">
//       <h1 className={'myStyle'}>μλνμΈμ</h1>
//       <div className={'post'}>
//         μ²« κ²μκΈμλλ€.
//       </div>
//       {/* <WorldClock city={'μμΈ'} time={10} />
//       <WorldClock city={'λ² μ΄μ§'} time={9} />
//       <WorldClock city={'μλλ'} time={12} />
//       <WorldClock city={'LA'} time={17} /> */}
//       {WorldClockList}
//     </div>
//   );
// }

class App extends Component {

  constructor(props) {
    super(props)

    this.cityTimeData = [
      ['μμΈ', 10],
      ['λ² μ΄μ§', 9],
      ['μλλ', 12],
      ['LA', 17]
    ]
    this.state = {
      content: '',
      show: true,
    }
    console.log("Parent) μμν©λλ€.")

  }

  componentDidMount() {
    console.log("Parent) λ§μ΄νΈλμμ΅λλ€.")
  }

  componentDidUpdate() {
    console.log("Parent) μλ°μ΄νΈ!")
  }

  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }

  handlingClick = (event) => {
    this.setState((prevState) => ({show: !prevState.show}))
  }
  
  render() {
    // console.log("Parent) λ λλ§!")

    return (
      <div className="App">
        <h1 className={'myStyle'}>μλνμΈμ</h1>
        <div className={'post'}>
          μ²« κ²μκΈμλλ€.
          <br />
          <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        </div>
        <br />
        <button onClick={this.handlingClick}>toggle</button>
        { this.state.show &&
          this.cityTimeData.map((citytime, index)=>
          <WorldClock city = {citytime[0]} time = {citytime[1]} key = {index} />
        )}
      </div>
    );
  }
 
  
}

export default App;
