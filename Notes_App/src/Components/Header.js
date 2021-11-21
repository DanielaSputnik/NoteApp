import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Header = ({handleToggleDarkMode, darkMode}) => {
    return (
        <div className='header'>
            <h1>My Notes</h1>
            <button className='darkmode-btn'
                title={darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
                onClick={() =>
                handleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode
                )}
            >
                {darkMode ? <MdLightMode /> : < MdDarkMode /> }
            </button>
        </div>
    )
}

export default Header