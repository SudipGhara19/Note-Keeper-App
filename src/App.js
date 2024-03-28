import './App.css';
import Navbar from './components/Navbar/Navbar';
import NoteForm from './components/NoteForm/NoteForm';
import NoteList from './components/NoteList/NoteList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NoteForm/>
      <NoteList/>
    </div>
  );
}

export default App;
