import './App.css';
import Navbar from './components/Navbar/Navbar';
import NoteForm from './components/NoteForm/NoteForm';
import NoteList from './components/NoteList/NoteList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/>
        <NoteForm/>
        <NoteList/>
      </Provider>
    </div>
  );
}

export default App;
