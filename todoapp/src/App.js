import AddTask from './component/AddTask';
import ListTask from './component/ListTask';
import FilterT from './component/FilterTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div >
      <AddTask />
      <FilterT />
      </div>
      <ListTask />      
      </header>
    </div>
  );
}

export default App;
