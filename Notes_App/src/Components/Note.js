import {MdDeleteForever, MdFileCopy} from 'react-icons/md'


const Note = ({id, title, text, date, handleDeleteNote, handleCopyNote}) => {
    return (
        <div className='note'>
            <div className='note-content'>
                <p className='note-title'>{title}</p>
                <span>{text}</span>
            </div>
            <div className='note-footer'>
                <div className='note-footer-date'>
                    <small>{date}</small>
                </div>
                <div className='note-footer-options'>
                    <MdFileCopy className='option-icon' title='Copy Note to Clipboard' onClick={()=>handleCopyNote(id)} />
                    <MdDeleteForever className='option-icon' size='1.2rem' title='Delete Note' onClick={()=>handleDeleteNote(id)}/>
                </div>
            </div>
        </div>
    )
}

export default Note