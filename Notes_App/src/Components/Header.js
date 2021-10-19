import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { BsSlashLg} from 'react-icons/bs';

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button className='darkmode-btn' title='Toggle Mode' onClick={() =>
                handleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode
                )
            }
            >
                < MdDarkMode /><BsSlashLg /><MdLightMode />
            </button>
        </div>
    )
}

export default Header