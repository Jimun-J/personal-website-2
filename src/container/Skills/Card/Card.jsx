import React from 'react'
import './Card.scss'

const Card = ({ img, title, description }) => {
    return (
        <div className="skills__card">
            <img className="skills__card-img" src={img} alt="" />
            <div className="skills__card-content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card