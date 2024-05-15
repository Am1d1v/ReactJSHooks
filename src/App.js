import './App.css';
import { useReducer } from 'react';

function App() {

  // Set range from 0 to 255
  const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
  const step = 51;

  const reducer = (state, action) => {
    switch(action.type){
      case "INCREASE_RED":
        return{
          ...state,
          red: limitRGB(state.red + step)
        }
      case "INCREASE_GREEN":
        return{
          ...state,
          green: limitRGB(state.green + step)
        }
      case "INCREASE_BLUE":
        return{
          ...state,
          blue: limitRGB(state.blue + step)
        }
      case "DECREASE_RED":
        return{
          ...state,
          red: limitRGB(state.red - step)
        }
      case "DECREASE_GREEN":
        return{
          ...state,
          green: limitRGB(state.green - step)
        }
      case "DECREASE_BLUE":
        return{
          ...state,
          blue: limitRGB(state.blue - step)
        }
    }
  }

  const [{red,green,blue}, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

  return(
    <div>
      <h1 style={{color: `rgb(${red}, ${green}, ${blue})`}}>COLOR TEXT</h1>

      <div>
        <span>R</span>
        <button onClick={() => dispatch({type: "INCREASE_RED"})}>+</button>
        <button onClick={() => dispatch({type: "DECREASE_RED"})}>-</button>
      </div>


    </div>
  )
}

export default App