import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import NotesList from "./Components/NotesList";
import Search from './Components/search';
import Header from './Components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Bilbo's Speech",
      text: "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
      date: '29/07/1954',
    },
    {
      id: nanoid(),
      title: 'Why did the chicken cross the road?',
      text: 'Because the sky is a gap. Because footsteps on the ceiling. Because footsteps in the basement. Because the grass doesn’t grow, or grows too much, or grows wrong. Because the dead return. That – that – is why the chicken crosses the road.',
      date: '10/07/2021',
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('MYnotes-app-data'))
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('MYnotes-app-data', JSON.stringify(notes));
  }, [notes])

  const addNote = (title, text) => {
    showAlert(true, "success", "Note Added");
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
    showAlert(true, "danger", "Note Removed");
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const copyNote = (id) => {
    showAlert(true, "success", "Text Copied to Clipboard");
    const specificItem = notes.find((note) => note.id === id);
    navigator.clipboard.writeText(specificItem.text)
  }

  const Alert = ({ type, msg, removeAlert, list }) => {
    useEffect(() => {
      const timeout = setTimeout(() => {
        removeAlert();
      }, 1000);
      return () => clearTimeout(timeout);
    }, [list, removeAlert]);
    return <p className={`alert alert-${type}`}>{msg}</p>;
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}
          darkMode={darkMode} />
        <Search handleSearchNote={setSearchText} />
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={notes} />}
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleCopyNote={copyNote} />
      </div>
    </div>
  );
}


export default App;
