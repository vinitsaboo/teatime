import {useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    return navigate('/gameDashboard');
  };
  
  return (
        <div className="App">
          <h1>Welcome to Bollywood Quiz Game</h1>
          <button onClick={handleButtonClick}>Start Game</button>
        </div>
  );
}

export default App;
