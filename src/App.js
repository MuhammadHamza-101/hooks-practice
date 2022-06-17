import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Practice from './demo'

import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

//create reducer function

// const reducer = (state, action) => {

//   switch (action.type) {
//     case "Increment":
//       return { count: state.count + 1 }
//     // case "TextValue":
//     //   return { text: state.text = "" }
//     default:
//       return state
//   };
// }




function App() {

  //  useState hook

  // let [counter, setCounter] = useState(0)
  // const [text, setText] = useState("type Hurry!")

  //use reducer hook

  // const [state, dispatch] = useReducer(reducer, { count: 0, text: "hamza" })

  //functions 

  // let Increment = () => {
  //   counter = counter + 1
  //   setCounter(counter)

  // }

  // let onChange = (e) => {
  //   setText(e.target.value)
  //   // console.log()
  // }



  //render component 

  return (
    <div className="App">

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Practice />
      </ErrorBoundary>
    </div>
  );
}

export default App;
