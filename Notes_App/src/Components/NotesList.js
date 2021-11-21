import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleCopyNote}) =>{
    return (
        <div className='notes-list'>
            {notes.map((note, index) => (
                <Note
                    key={index}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    date={note.date}
                    handleCopyNote={handleCopyNote}
                    handleDeleteNote={handleDeleteNote}/>
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}


export default NotesList;