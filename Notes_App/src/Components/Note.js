import {MdDeleteForever, MdPalette, MdFileCopy} from 'react-icons/md'


const Note = ({id, title, text, date, handleDeleteNote}) => {
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
                    <MdPalette className='option-icon'/>
                    <MdFileCopy className='option-icon' />
                    <MdDeleteForever onClick={()=>handleDeleteNote(id)} className='option-icon' size='1.2rem'/>
                </div>
            </div>
        </div>
    )
}

export default Note