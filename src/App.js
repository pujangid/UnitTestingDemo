import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';

function App() {

  return (
    <div className="App">
     <Login />

     {/* <ul style={{ listStyle: 'none' }}>
          {
            // Loop over the object keys and render each key
            Object.keys(state).map(key => renderLine(state, key))
          }
        </ul> */}
    </div>
  );
}

export default App;
