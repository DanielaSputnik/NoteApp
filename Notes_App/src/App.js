import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import NotesList from "./Components/NotesList";
import Search from './Components/search';
import Header from './Components/Header';

const App = () => {
  const [notes, setNotes] = useState([
      {
        id: nanoid(),
        title: 'Patkani Note',
        text: 'Palko je velmi smutny. Dankan tiez.',
        date: '10/07/2021',
      },
      {
        id: nanoid(),
        title: 'Inconspicuous note',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. ',
        date: '10/02/2021',
      }
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('rat-react-notes-data'))
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('rat-react-notes-app-data', JSON.stringify(notes));
  }, [notes])

  const addNote = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>
      </div>
    </div>
    );
}


export default App;
