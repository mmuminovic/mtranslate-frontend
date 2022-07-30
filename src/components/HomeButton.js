import React from 'react'

const HomeButton = ({ text, onClick }) => {
    return (
        <div className="home-button" onClick={onClick}>
            <span className="home-button__text">{text}</span>
        </div>
    )
}

export default HomeButton
