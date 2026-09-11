import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>

      <Task
        title="Dishes"
        deadline="Today"
        description="Empty dishwasher"
      />

      <Task
        title="Laundry"
        deadline="Tomorrow"
        description="Folding laundry and putting away"
      />

      <Task
        title="Tidy"
        deadline="Today"
        description="Clean that mess"
      />
    </div>
  );
}

export default App;