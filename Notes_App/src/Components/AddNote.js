
import { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const characterLimit = 230;
    
    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value)
    };
    const handleTextChange = (event) => {
        setNoteText(event.target.value)
    };
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteTitle, noteText);
            setNoteText('');
            setNoteTitle('');
        }
        else {
            setNoteText('Add something here first..')
            setTimeout(() => {
                setNoteText('')
                }, 1000);
        }
    };

    return (<div className='note new'>
        <textarea
            cols="1"
            rows="1"
            placeholder='Add a Title (optional)'
            maxLength="25"
            value={noteTitle}
            onChange={handleTitleChange}>
        </textarea>
        <textarea
            cols="10"
            rows="8"
            placeholder='Add New Note...'
            maxLength="230"
            value={noteText}
            onChange={handleTextChange}
        >
        </textarea>
        <div className='note-footer'>
            <small>{characterLimit - noteText.length} Characters Remaining</small>
            <button className='save-btn' title='Add Note' onClick={handleSaveClick}>+</button>
        </div>
    </div>
    )
}

export default AddNote