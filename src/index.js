import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, useHistory } from "react-router-dom";

ReactDOM.render(

    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
// ____________________________________________________
// const element = <h1>Hello, world!</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// ___________________________________________________

// const name = 'Deri Susanto';
// const element = <h1>Helo, {name} </h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// _________________________________________________________
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Deri',
//   lastName: 'Susanto'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!  </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// _________________________________________________________
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Halo, Dunia!'
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// _________________________________________________________
// function formatName(user) {
//    return user.firstName + ' ' + user.lastName;
//   }

//   const user = {
//     firstName: 'Deri',
//     lastName: 'Susanto'
//    };

// function getGreeting(user) {
//   if (user) {
//     return <> {formatName(user)}! </>; 
//    }

//   return <h1>Halo, Orang Asing.</h1>;
//   }

// const element = (
//  <h1>
//      Hello, {getGreeting(user)}!  </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// const element = (
//   <div>
//     <h1>Halo!</h1>
//     <h2>Senang melihatmu di sini.</h2>
//   </div>
// );

// ReactDOM.render(
//    element,
//    document.getElementById('root')
// );

// const element = (
//   <h1 className="greeting">
//     Halo, Dunia!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// const element = (  
//   <h1> 
//     HALLO DERI </h1>
// );  
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// const element = <img src={logo}/>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
