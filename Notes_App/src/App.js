import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import NotesList from "./Components/NotesList";
import Search from './Components/search';
import Header from './Components/Header';

const App = () => {
  const [notes, setNotes] = useState([
      {
        id: nanoid(),
        title: 'On Nature of Things',
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
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('rat-react-notes-app-data'))
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('rat-react-notes-app-data', JSON.stringify(notes));
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
    }, [list]);
    return <p className={`alert alert-${type}`}>{msg}</p>;
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
      <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText} />
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={notes} />}
        <NotesList
          notes={notes}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleCopyNote={copyNote}/>
      </div>
    </div>
    );
}


export default App;
