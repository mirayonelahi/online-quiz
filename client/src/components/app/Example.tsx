// import moment from 'moment';
import React from 'react';
import Countdown from 'react-countdown-now';
import { observer } from 'mobx-react';
import { Controller } from 'src/models/basics/Controller';
// var now: Date = new Date();
// // var ready = moment(now)
// //   .add(30, 'm')
// //   .toDate();

// // var timeDiff = Math.abs(ready.getTime() - now);
// //    // Store value
// localStorage.setItem('quizstarttime', JSON.stringify(now));
// now = JSON.parse(localStorage.quizstarttime);
// Retrieve value from local storage and assign to variable
// var cat = localStorage.getItem('quizstarttime');
// let saved = JSON.parse(localStorage.ayon);
// console.log('now', now);
// console.log('get', cat);
// console.log('saved', saved);
// var now1 = moment(now).format('h:mm:ss');
// setInterval(() => {

// const sec = timeDiff / 60 * 1000;
// const secc = 1000;
// localStorage.setItem('storagesave', JSON.stringify(secc));
//   // Retrieve value from local storage and assign to variable
//   var catt = localStorage.getItem('storagesave');
// // tslint:disable-next-line: radix
//   console.log((catt)) ;
// }, 1000);
// var sec = 10000;
// var catt = localStorage.getItem('storagesave');
// let saved = JSON.parse(localStorage.storagesave);
// var counterIncrement = -1;
// setInterval(timer, 1000);
// function timer() {
//   // localStorage.setItem('storagesave', JSON.stringify(sec));
// // // Retrieve value from local storage and assign to variable
// // var catt = localStorage.getItem('storagesave');
//   sec = sec + counterIncrement;
//   saved = saved + counterIncrement;
//   // counterIncrement = -counterIncrement;
//   if (sec === 0 || sec === ( 1000) ) {
//         counterIncrement = -counterIncrement;
//     }

// console.log('cat', catt) ;
// console.log(sec);
// console.log(saved);
// }
export const Example = observer(
  (props: { controller: typeof Controller.Type }) => {
    const setTimer = (e: any) => {
      var a: any = new Date();
      console.log('a', a);
      localStorage.a = a;
      a = Date.parse(localStorage.a);
      const savedd = Date.parse(localStorage.a);
      console.log('a later', a);
      props.controller.toggleButton(false);
      // props.controller.setTimesave(savedd);
      console.log('haha', savedd);
      console.log('date.now', Date.now());

    };
    return (
      <div>
        <button onClick={setTimer}>click me</button>
        <Countdown date={props.controller.examStartTime + 500000} />
      </div>
      // <Countdown date={Date.now() + catt}  />
    );
  }
);
// import React, { Component } from 'react'

// class Example extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       count: 1
//     }
//   }

//   render () {
//     const {count} = this.state
//     return (
//       <div>
//         <h1>Current Count: {count}</h1>
//       </div>
//     )
//   }
//   // setInterval
//   // clearInterval
//   componentDidMount () {
//     const {startCount} = this.props
//     this.setState({
//       count: startCount
//     })
//     this.doIntervalChange()
//   }

//   doIntervalChange = () => {
//       this.myInterval = setInterval(() => {
//       this.setState(prevState => ({
//         count: prevState.count - 1
//       }))
//     }, 1000)
//   }

//   componentWillUnmount () {
//     clearInterval(this.myInterval)
//   }
// }

// export default Example
