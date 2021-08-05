import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
