import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }
    return(
        // <header style={{backgroundColor: 'lightblue', color: 'red'}}>
        <header style={headerStyles}>
            <div className='container'>
                <h2>{text}</h2> 
            </div>
        </header> 
    )
}

Header.defaultProps = {
    text: 'FeedBack UI',
    bgColor: 'rgba(0,0,0,0.4)', // bgColor: 'lightyellow',
    textColor: '#ff6a95', // textColor: 'red',
}

Header.propTypes = {
    text: PropTypes.string,
}


export default Header