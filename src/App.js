import './App.css';
import { Context } from './Hooks/useContext/Context';
import Books from './components/Books';

function App() {

  return(
    <div className='container-md'>
      <Context>
        <Books />
      </Context>
    </div>
  )
}

export default App