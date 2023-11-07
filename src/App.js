//stylesheet
import './App.css';
//module packages
import { Link } from 'react-router-dom';
//components


function App() {
  return (
    <div className='home-container'>
        <h1>Movie App</h1>
        <h3>Welcome to your movie gallery</h3>
        <p>In this app you can add, delete and edit the movies you have seen</p>
        <div>
          <Link to="/login" className='start-button'>Lets go!</Link>
        </div>
    </div>
  );
}

export default App;
